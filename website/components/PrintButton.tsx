'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2 transition-colors"
      aria-label="הדפס מאמר"
    >
      🖨️ הדפס מאמר
    </button>
  );
}
