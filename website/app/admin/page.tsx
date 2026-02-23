'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function AdminPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', slug: '', tags: '', type: 'article', date: new Date().toISOString().split('T')[0], published: true, content: '' });
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const slugify = (title: string) =>
    title.trim().toLowerCase()
      .replace(/s+/g, '-')
      .replace(/[^w֐-׿-]/g, '')
      .substring(0, 60);

  const handleTitleChange = (title: string) => {
    setForm(p => ({ ...p, title, slug: p.slug || slugify(title) }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setForm(p => ({ ...p, content: ev.target?.result as string }));
    reader.readAsText(file);
  };

  const save = async (pub: boolean) => {
    setStatus('saving');
    setErrorMsg('');
    try {
      const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean);
      const res = await fetch('/api/admin/post', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, tags, published: pub }) });
      if (res.ok) { setStatus('success'); setTimeout(() => setStatus('idle'), 3000); } else { const err = await res.json(); setErrorMsg(err.error || 'שגיאה'); setStatus('error'); }
    } catch (e) { const message = e instanceof Error ? e.message : 'Unknown error'; setErrorMsg(message); setStatus('error'); }
  };

  const logout = async () => { await fetch('/api/admin/logout', { method: 'POST' }); router.push('/admin/login'); };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">ממשק כתיבה</h1>
        <button onClick={logout} className="text-sm text-gray-500 hover:text-red-600 transition-colors">התנתק</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div><label className="block text-sm font-semibold mb-1.5">כותרת *</label><input value={form.title} onChange={e => handleTitleChange(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="כותרת המאמר" /></div>
          <div><label className="block text-sm font-semibold mb-1.5">Slug (URL) *</label><input value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value }))} dir="ltr" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="my-post-url" /></div>
          <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-semibold mb-1.5">סוג</label><select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl"><option value="article">מאמר</option><option value="tip">טיפ</option></select></div><div><label className="block text-sm font-semibold mb-1.5">תאריכ</label><input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} dir="ltr" className="w-full px-4 py-3 border border-gray-200 rounded-xl" /></div></div>
          <div><label className="block text-sm font-semibold mb-1.5">תגיות</label><input value={form.tags} onChange={e => setForm(p => ({ ...p, tags: e.target.value }))} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="AI, טכנולוגיה" /></div>
          <div><label className="block text-sm font-semibold mb-1.5">תוכן (Markdown) *</label><textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} rows={16} className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-y font-mono text-sm" dir="rtl" placeholder="כתוב כאן..." /></div>
          <div><label className="block text-sm font-semibold mb-1.5">העלה קובץ MD/TXT</label><input ref={fileRef} type="file" accept=".md,.txt,.mdx" onChange={handleFileUpload} className="hidden" /><button type="button" onClick={() => fileRef.current?.click()} className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-xl w-full">גרור קובץ או לחץ לבחירה</button></div>
          {status === 'success' && <p className="text-green-600 font-medium">נשמר בהצלחה!</p>}
          {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}
          <div className="flex gap-3">
            <button onClick={() => setPreview(!preview)} className="btn-secondary flex-1 justify-center" type="button">{preview ? 'הסתר תצוגה מקדימית' : 'תצוגה מקדימית'}</button>
            <button onClick={() => save(false)} disabled={status === 'saving'} className="px-5 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 disabled:opacity-50" type="button">שמור כטיוטה</button>
            <button onClick={() => save(true)} disabled={status === 'saving'} className="btn-primary disabled:opacity-50" type="button">{status === 'saving' ? 'שומר...' : 'שמור ופרסם'}</button>
          </div>
        </div>
        {preview && (
          <div className="border border-gray-200 rounded-xl p-6 bg-white overflow-auto max-h-screen sticky top-20">
            <h2 className="font-bold text-2xl mb-2 text-gray-900">{form.title || 'כותרת'}</h2>
            <div className="text-sm text-gray-400 mb-6">{form.date}</div>
            <MarkdownRenderer content={form.content} />
          </div>
        )}
      </div>
    </div>
  );
}

