'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PostCard from '@/components/PostCard';
import TagFilter from '@/components/TagFilter';
import { Post } from '@/lib/posts';

export default function BlogClient({ posts, tags }: { posts: Post[]; tags: string[] }) {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get('tag') || undefined;
  const [typeFilter, setTypeFilter] = useState<'all' | 'article' | 'tip'>('all');
  const [search, setSearch] = useState('');

  const filtered = posts.filter(p => {
    if (activeTag && !p.tags.includes(activeTag)) return false;
    if (typeFilter !== 'all' && p.type !== typeFilter) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      {/* חיפוש */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="חיפוש..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* סינון סוג */}
      <div className="flex gap-2 mb-5">
        {[
          { val: 'all', label: 'הכל' },
          { val: 'article', label: 'מאמרים' },
          { val: 'tip', label: 'טיפים' },
        ].map(opt => (
          <button
            key={opt.val}
            onClick={() => setTypeFilter(opt.val as 'all' | 'article' | 'tip')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${typeFilter === opt.val ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* תגיות */}
      <div className="mb-8">
        <TagFilter tags={tags} activeTag={activeTag} />
      </div>

      {/* כרטיסים */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">לא נמצאו מאמרים</p>
        </div>
      )}
    </div>
  );
}
