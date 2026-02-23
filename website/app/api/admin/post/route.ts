import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { pushPostToGitHub } from '@/lib/github';

export async function POST(req: NextRequest) {
  const isAuthed = await verifySession();
  if (!isAuthed) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { slug, title, date, tags, type, published, content } = await req.json();
    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const frontmatter = `---
title: "${title}"
date: "${date}"
tags: [${tags.map((t: string) => `"${t}"`).join(', ')}]
type: "${type}"
published: ${published}
slug: "${slug}"
---

${content}`;

    await pushPostToGitHub(slug, frontmatter);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
