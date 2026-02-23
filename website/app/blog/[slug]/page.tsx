import { getAllPosts, getPostBySlug } from '@/lib/posts';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PrintButton from '@/components/PrintButton';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: `${post.title} – זאביק אבינר` };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const idx = allPosts.findIndex(p => p.slug === slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  const formatDate = (d: string) => new Date(d).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {post.type === 'tip' && <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">טיפ</span>}
          {post.type === 'article' && <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">מאמר</span>}
          <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Link key={tag} href={`/blog?tag=${tag}`} className="text-xs bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 px-2 py-0.5 rounded-full transition-colors">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 mb-8" />

      {/* Content */}
      <MarkdownRenderer content={post.content} />

      {/* Print button */}
      <div className="mt-10 no-print">
        <PrintButton />
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4 no-print">
        {prev && (
          <Link href={`/blog/${prev.slug}`} className="text-right group">
            <div className="text-xs text-gray-400 mb-1">← מאמר קודם</div>
            <div className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{prev.title}</div>
          </Link>
        )}
        {next && (
          <Link href={`/blog/${next.slug}`} className="text-left group col-start-2">
            <div className="text-xs text-gray-400 mb-1">מאמר הבא →</div>
            <div className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{next.title}</div>
          </Link>
        )}
      </div>

      <div className="mt-8 no-print">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">← חזרה לבלוג</Link>
      </div>
    </article>
  );
}
