const marks = [
  <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" /><path d="M5 14c5-5 10 3 15-1s10 3 15-1M4 21c5-5 10 3 16-1s10 3 16-1M6 28c5-4 9 2 14-1s9 2 14-1" fill="none" stroke="#f5f5f6" strokeWidth="3" strokeLinecap="round" /></svg>,
  <svg viewBox="0 0 40 40">{Array.from({ length: 12 }, (_, i) => <rect key={i} x="18" y="1" width="4" height="12" rx="2" transform={`rotate(${i * 30} 20 20)`} />)}</svg>,
  <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" /><path d="M22 6 12 22h7l-2 12 11-17h-8Z" fill="#f5f5f6" /></svg>,
  <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" /><g fill="#f5f5f6"><circle cx="20" cy="10" r="5" /><circle cx="30" cy="20" r="5" /><circle cx="20" cy="30" r="5" /><circle cx="10" cy="20" r="5" /></g></svg>,
  <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" /><g fill="none" stroke="#f5f5f6" strokeWidth="1.6">{[16, 13, 10, 7, 4].map((r) => <circle key={r} cx="20" cy="20" r={r} />)}</g></svg>,
];

export default function LogoStrip() {
  return (
    <section className="logos" aria-label="Partners">
      <div className="container logos-row">
        {marks.map((m, i) => <span key={i} className="logo-mark">{m}Logoipsum</span>)}
      </div>
    </section>
  );
}
