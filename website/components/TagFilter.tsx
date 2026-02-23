'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function TagFilter({ tags, activeTag }: { tags: string[]; activeTag?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setTag = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag) params.set('tag', tag);
    else params.delete('tag');
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setTag(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${!activeTag ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        הכל
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => setTag(tag)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTag === tag ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
