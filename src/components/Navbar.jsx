import Logo from "./Logo";
import { navLinks } from "../data";

export default function Navbar() {
  return (
    <nav className="nav container" id="top" aria-label="Main">
      <Logo />
      <ul>
        {navLinks.map((l, i) => (
          <li key={l}><a href="#top" className={i === 0 ? "on" : ""}>{l}</a></li>
        ))}
      </ul>
      <div className="nav-r">
        <a href="#top">Sign In</a>
        <a href="#top">Join Us</a>
        <button className="icon-btn" aria-label="Cart"><svg width="18" height="20" viewBox="0 0 20 22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="6.5" width="16" height="14" rx="2.2" />
            <path d="M6.6 9.2V5.6a3.4 3.4 0 0 1 6.8 0v3.6" />
          </svg></button>
      </div>
    </nav>
  );
}
