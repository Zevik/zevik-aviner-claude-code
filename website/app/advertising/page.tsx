import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'משרד פרסום ג׳רוזיטי',
  description: 'פרסום אורגני בקהילות הפייסבוק הגדולות של ירושלים – ג׳רוזיטי',
};

export default function AdvertisingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3 text-gray-900">ג׳רוזיטי – הסיפור הירושלמי הופך לקמפיין</h1>
      <p className="text-xl text-blue-600 font-semibold mb-10">פרסום אורגני בקהילות הפייסבוק הגדולות של ירושלים</p>

      <div className="bg-blue-50 rounded-2xl p-8 mb-10">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">אם הלקוחות שלך נמצאים בירושלים – הם כבר נמצאים אצלנו.</p>
        <p className="text-gray-700 leading-relaxed mb-4">ג׳רוזיטי מתמחה בשיווק אורגני בקבוצות הפייסבוק הירושלמיות. אנחנו מנהלים את רשת קבוצות התלתן ♣ – הרשת החברתית הגדולה והמשפיעה בירושלים, עם למעלה מ-80 קבוצות פייסבוק, מעל 30 קבוצות וואטסאפ שכונתיות, ו-600,000 חברים פעילים.</p>
        <p className="text-gray-700 leading-relaxed">הקבוצה המרכזית &quot;ירושלמים וירושלמיות&quot; לבדה מונה מעל 200,000 חברים עם חשיפה יומית של כ-90,000 איש.</p>
      </div>

      {/* מספרים */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { num: '80+', label: 'קבוצות פייסבוק' },
          { num: '30+', label: 'קבוצות וואטסאפ' },
          { num: '600K', label: 'חברים פעילים' },
          { num: '90K', label: 'חשיפה יומית' },
        ].map(stat => (
          <div key={stat.label} className="card p-5 text-center">
            <div className="text-3xl font-black text-blue-600 mb-1">{stat.num}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-900">למה לפרסם אצלנו?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {[
          { icon: '🎯', title: 'חשיפה מיידית לקהל ירושלמי ענק ורלוונטי' },
          { icon: '📍', title: 'פרסום ממוקד לפי שכונות ותחומי עניין' },
          { icon: '🤝', title: 'הכרות אמיתית ועמוקה עם הקהילה' },
          { icon: '✍️', title: 'ליווי וייעוץ קופירייטינג לפוסט שעובד' },
        ].map(item => (
          <div key={item.title} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-700 font-medium">{item.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <p className="text-gray-600 mb-1"><strong>שעות פעילות:</strong> א׳–ה׳, 10:00–15:00</p>
        <p className="text-gray-600"><strong>אתר:</strong> <a href="https://jerus.city" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">jerus.city</a></p>
      </div>

      <a
        href="https://wa.me/972546609385"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-lg"
        aria-label="שלח הודעה למנהלת הקמפיינים בוואטסאפ"
      >
        💬 שלח הודעה למנהלת הקמפיינים
      </a>
    </div>
  );
}
