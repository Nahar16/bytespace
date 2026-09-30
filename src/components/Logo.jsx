export default function Logo({ dark = false }) {
  return (
    <a href="#top" className={`logo${dark ? " logo-dark" : ""}`} aria-label="ByteSpace home">
      <svg width="30" height="34" viewBox="0 0 30 34" aria-hidden="true">
        <path d="M0 4C0 1.8 1.8 0 4 0h3c2.2 0 4 1.8 4 4v6h6c7.2 0 13 5.4 13 12s-5.8 12-13 12H4c-2.2 0-4-1.8-4-4Z" fill="#d4fb20" />
        <path d="M13.5 17.5v9l8-4.5Z" fill={dark ? "#fff" : "#003be2"} />
      </svg>
      <span>ByteSpace</span>
    </a>
  );
}
