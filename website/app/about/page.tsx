import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות',
  description: 'זאביק אבינר – ירושלמי, מומחה AI וטכנולוגיה, מנהל קהילות',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">אודות</h1>
      <p className="text-blue-600 font-semibold text-lg mb-10">זאביק אבינר, ירושלמי. סקרן במקצוע.</p>

      <div className="prose rtl-content text-gray-700 leading-relaxed space-y-5 text-lg">
        <p>יותר מעשרים שנה אני חי ונושם ירושלים – את האנשים שלה, את הסיפורים שלה, את הקהילות שלה.</p>
        <p>במקביל, צברתי רקע שלא הולך ביחד בדרך כלל: לימודים תורניים גבוהים, תואר ראשון ושני בכימיה באוניברסיטה העברית, לימודי פסיכודרמה, פסיכולוגיה והנחיית קבוצות. הרקע הזה עיצב את הדרך שבה אני מסתכל על בעיות – לא מכיוון אחד, אלא מכמה זוויות בו-זמנית.</p>
        <p>ב-12 השנים האחרונות בניתי וניהלתי את רשת קהילות הפייסבוק הגדולה של ירושלים – מאות אלפי חברים, עשרות קבוצות, מאות שיחות גישור, ותהליכים קהילתיים עמוקים סביב שייכות, זהות וסובלנות.</p>
        <p>במקביל, הפכתי למומחה AI וטכנולוגיה – לא מתוך אהבה לטכנולוגיה בשביל עצמה, אלא כי גיליתי שהיא יכולה לשנות את חיי אנשים ועסקים בצורה אמיתית ומהירה.</p>
        <p>אני חוקר וסקרן מטבעי. כותב על הכל – AI, קהילות, טכנולוגיה, חיים. מעביר הרצאות וסדנאות. בונה כלים. ועוזר לארגונים לייעל תהליכים בעזרת AI.</p>
      </div>

      {/* תחומי מומחיות */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { emoji: '🤖', title: 'בינה מלאכותית וייעול תהליכים' },
          { emoji: '👥', title: 'ניהול קהילות ברשת' },
          { emoji: '🔧', title: 'טכנולוגיה וכלים דיגיטליים' },
        ].map(item => (
          <div key={item.title} className="card p-6 text-center">
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* לינקים */}
      <div className="mt-12 flex gap-4 flex-wrap">
        <a href="https://linkedin.com/in/zevikaviner" target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="LinkedIn">LinkedIn</a>
        <a href="https://github.com/zevikaviner" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="GitHub">GitHub</a>
        <a href="https://facebook.com/zevik.aviner" target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="Facebook">Facebook</a>
      </div>
    </div>
  );
}
