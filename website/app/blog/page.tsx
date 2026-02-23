import { Suspense } from 'react';
import { getAllPosts, getAllTags } from '@/lib/posts';
import BlogClient from './BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'עלה לי בראש',
  description: 'מאמרים וטיפים על AI, טכנולוגיה, קהילות – זאביק אבינר',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">עלה לי בראש</h1>
      <p className="text-xl text-blue-600 font-medium mb-4">מאמרים וטיפים על AI, טכנולוגיה, קהילות, וכל מה שמעניין אותי השבוע</p>
      <p className="text-gray-600 mb-10 leading-relaxed">אני כותב כשמשהו מעניין אותי. לא לפי לוח זמנים, לא לפי אלגוריתם. אם זה עלה לי בראש ונראה שווה לשתף – זה כאן.</p>
      <Suspense fallback={<div className="text-gray-400">טוען...</div>}>
        <BlogClient posts={posts} tags={tags} />
      </Suspense>
    </div>
  );
}
