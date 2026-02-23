import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'קהילות',
  description: '12 שנים של ניהול קהילות ירושלמיות – זאביק אבינר',
};

export default function CommunitiesPage() {
  const communityPosts = getAllPosts().filter(p => p.tags.includes('קהילות')).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3 text-gray-900">12 שנים של ירושלים</h1>
      <p className="text-xl text-blue-600 font-semibold mb-10">בניתי את הרשת הקהילתית הגדולה של העיר – ולמדתי בדרך שקהילה טובה לא קורית בטעות</p>

      <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-14">
        <p>ניהול קהילה זה לא לאשר בקשות הצטרפות ולמחוק ספאם. זה ללוות תהליכים אנושיים אמיתיים – קונפליקטים, שינויים, משברים, וגם רגעים יפים.</p>
        <p>ב-12 השנים האחרונות ניהלתי עשרות קהילות פייסבוק בירושלים, כל אחת עם האופי שלה, הכללים שלה והאתגרים שלה. מאות שיחות גישור, אלפי אינטראקציות אישיות, ותהליכים קבוצתיים עמוקים סביב שייכות, זהות, סובלנות ופירוק סטריאוטיפים.</p>
        <p>מעביר הרצאות וסדנאות על ניהול קהילות ברשת החברתית – לארגונים, עסקים ומנהלי קהילות.</p>
      </div>

      {/* מספרים */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { num: '80+', label: 'קבוצות פייסבוק' },
          { num: '30+', label: 'קבוצות וואטסאפ שכונתיות' },
          { num: '600K+', label: 'חברים' },
          { num: '12', label: 'שנות ניהול' },
        ].map(stat => (
          <div key={stat.label} className="card p-6 text-center">
            <div className="text-3xl font-black text-blue-600 mb-2">{stat.num}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* בלוג קהילות */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">מאמרים וטיפים מהשטח</h2>
          <Link href="/blog?tag=קהילות" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            לכל המאמרים ←
          </Link>
        </div>
        {communityPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityPosts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">מאמרים יתווספו בקרוב...</p>
        )}
      </div>
    </div>
  );
}
