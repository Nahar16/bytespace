import Logo from "./Logo";
import Button from "./Button";
import { footerCols } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="f-top">
          <div className="f-news">
            <Logo dark />
            <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <Button type="submit">Search</Button>
            </form>
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
          </div>
          <nav className="f-cols" aria-label="Footer">
            {footerCols.map((col, i) => (
              <ul key={i}>{col.map((l) => <li key={l}><a href="#top">{l}</a></li>)}</ul>
            ))}
          </nav>
        </div>
        <div className="f-bottom">
          <small>© 2023 ByteSpace. All rights reserved.</small>
          <div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a><a href="#top">Cookies Settings</a></div>
        </div>
      </div>
    </footer>
  );
}
