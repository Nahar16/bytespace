import { PencilRuler, Smartphone, Laptop, Building2, Megaphone, Camera } from "lucide-react";
import { paths } from "../data";

const icons = [PencilRuler, Smartphone, Laptop, Building2, Megaphone, Camera];

export default function Paths() {
  return (
    <section className="section paths container" aria-labelledby="paths-h">
      <header className="sh">
        <h2 id="paths-h" className="h-sub">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="lead">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      </header>
      <div className="grid6">
        {paths.map((p, i) => {
          const Icon = icons[i];
          return (
            <a href="#top" key={p} className="path">
              <span className="ico"><Icon size={28} strokeWidth={1.75} aria-hidden="true" /></span>
              {p}
            </a>
          );
        })}
      </div>
    </section>
  );
}
