import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'שירותים',
  description: 'ייעוץ AI וייעול תהליכים, הרצאות וסדנאות – זאביק אבינר',
};

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3 text-gray-900">אני עוזר לך לעבוד חכם יותר</h1>
      <p className="text-xl text-blue-600 font-medium mb-16">שתי דרכים עיקריות לעבוד ביחד</p>

      {/* סקשן 1 – ייעוץ AI */}
      <section className="mb-20">
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">⚡ הצוות שלך טובע במשימות שחוזרות על עצמן?</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>מידע שהולך לאיבוד בין מיילים, אקסלים והודעות וואטסאפ. משימות שאפשר היה לאוטמט מזמן. תהליכים שעובדים על ידיים כי &quot;ככה תמיד היה&quot;.</p>
            <p>אני בונה פתרונות ממוקדים שמוטמעים תוך ימים ספורים – לא פרויקטים ארוכים, לא יועצים שנעלמים אחרי המצגת.</p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-4 text-gray-900">דוגמאות לפתרונות:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            'אוטומציה ליצירת חוזים ודוחות',
            'אינטגרציות בין Gmail / Sheets / CRM / WhatsApp',
            'כלי AI לניתוח נתונים',
            'מערכות ניהול מותאמות אישית',
          ].map(item => (
            <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-blue-500 text-xl">✓</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-lg mb-4 text-gray-900">למי זה מתאים:</h3>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            'מנהלים שרוצים להפסיק לכבות שריפות',
            'עסקים עם תהליכים ידניים שמבזבזים זמן',
            'ארגונים עם מערכות שלא מדברות אחת עם השניה',
          ].map(item => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn-primary" aria-label="קבע שיחת אבחון">
          קבע שיחת אבחון חינמית – בלי התחייבות, רק ערך
        </Link>
      </section>

      <hr className="border-gray-200 mb-20" />

      {/* סקשן 2 – הרצאות */}
      <section>
        <h2 className="text-2xl font-bold mb-3 text-gray-900">🎤 ידע שאפשר ליישם מחר בבוקר</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">שלוש הרצאות מרכזיות, מבוססות על ניסיון אישי ועל הרבה שנות עשייה בשטח. לא תיאוריה – כלים אמיתיים שעובדים.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              num: '01',
              title: 'בינה מלאכותית מהקצה לקצה',
              desc: 'מה AI יכול לעשות בשבילך היום, כלים פרקטיים, בניית אתרים, יצירת תוכן ועוד.',
              audience: 'לבעלי עסקים, יזמים ואנשי שיווק',
            },
            {
              num: '02',
              title: 'כלים טכנולוגיים וטיפים דיגיטליים',
              desc: 'ארגז כלים עשיר: תוספי כרום, Google Workspace, טריקים שחוסכים שעות.',
              audience: 'לכל מי שעובד עם מחשב',
            },
            {
              num: '03',
              title: 'מדריך מקיף לעצמאים',
              desc: 'הוצאות מוכרות, קרנות פנסיה והשתלמות, היבטים משפטיים, כלים לניהול עסק.',
              audience: 'לעוסקים ויזמים בתחילת דרך',
            },
          ].map(lecture => (
            <div key={lecture.num} className="card p-7">
              <div className="text-4xl font-black text-blue-100 mb-3">{lecture.num}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{lecture.title}</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{lecture.desc}</p>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{lecture.audience}</span>
            </div>
          ))}
        </div>

        <Link href="/contact" className="btn-secondary" aria-label="הזמן הרצאה">
          מעוניין להזמין הרצאה? דבר איתי
        </Link>
      </section>
    </div>
  );
}
