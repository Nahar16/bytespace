import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Discover from "./components/Discover";
import Paths from "./components/Paths";
import Showcase from "./components/Showcase";
import CreatorCta from "./components/CreatorCta";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="hero-wrap"><Navbar /><Hero /></div>
      <main>
        <LogoStrip />
        <Discover />
        <Paths />
        <Showcase />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
