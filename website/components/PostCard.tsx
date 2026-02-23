import Link from 'next/link';
import { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="card p-6 h-full flex flex-col gap-3 cursor-pointer">
        <div className="flex items-center gap-2">
          {post.type === 'tip' && (
            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">טיפ</span>
          )}
          {post.type === 'article' && (
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">מאמר</span>
          )}
          <span className="text-sm text-gray-400">{formatDate(post.date)}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 leading-snug">{post.title}</h3>
        <div className="flex flex-wrap gap-1 mt-auto">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
}
