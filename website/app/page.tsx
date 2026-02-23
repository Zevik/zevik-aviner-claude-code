import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'זאביק אבינר – מומחה AI, טכנולוגיה וקהילות',
  description: 'ירושלמי. סקרן במקצוע. עוזר לאנשים ולארגונים לעבוד חכם יותר.',
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">זאביק אבינר</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-3">מומחה AI, טכנולוגיה וקהילות</p>
          <p className="text-lg text-gray-600 mb-10">ירושלמי. סקרן במקצוע. עוזר לאנשים ולארגונים לעבוד חכם יותר.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary" aria-label="לעמוד השירותים">
              השירותים שלי
            </Link>
            <Link href="/contact" className="btn-secondary" aria-label="לעמוד צור קשר">
              דבר איתי
            </Link>
          </div>
        </div>
      </section>

      {/* מי אני */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">מה אני עושה</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🤖', title: 'בינה מלאכותית וייעול תהליכים', desc: 'בניית כלים ופתרונות AI שמשנים את הדרך שבה עסקים עובדים' },
              { emoji: '👥', title: 'ניהול קהילות ברשת', desc: '12 שנות ניסיון בבניית וניהול קהילות דיגיטליות גדולות בירושלים' },
              { emoji: '🔧', title: 'טכנולוגיה וכלים דיגיטליים', desc: 'תוספי כרום, אוטומציות וכלים שחוסכים שעות עבודה בכל שבוע' },
            ].map(item => (
              <div key={item.title} className="card p-8 text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* שירותים */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">שירותים</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ייעוץ AI וייעול תהליכים', desc: 'פתרונות ממוקדים שמוטמעים תוך ימים ספורים', link: '/services', icon: '⚡' },
              { title: 'הרצאות וסדנאות', desc: 'ידע שאפשר ליישם מחר בבוקר – AI, כלים דיגיטליים, ועצמאות', link: '/services', icon: '🎤' },
              { title: 'משרד פרסום ג׳רוזיטי', desc: 'פרסום אורגני בקהילות הפייסבוק הגדולות של ירושלים', link: '/advertising', icon: '📣' },
            ].map(s => (
              <Link key={s.title} href={s.link}>
                <div className="card p-7 h-full">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* מאמרים אחרונים */}
      {posts.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-gray-900">מהבלוג</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                לכל המאמרים ←
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map(post => <PostCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">רוצה לייעל את העסק שלך?</h2>
          <p className="text-blue-100 mb-8 text-lg">שיחת אבחון חינמית – בלי התחייבות, רק ערך</p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-block" aria-label="קבע שיחה">
            קבע שיחה
          </Link>
        </div>
      </section>
    </div>
  );
}
