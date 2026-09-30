import { useState } from "react";
import CourseCard from "./CourseCard";
import { chips, courses } from "../data";

// Rows as laid out in the design: 8 / 6 / 5 incl. "More"
const rows = [chips.slice(0, 8), chips.slice(8, 14), chips.slice(14)];

export default function Discover() {
  const [active, setActive] = useState("Featured");
  return (
    <section className="section discover container" aria-labelledby="discover-h">
      <header className="sh">
        <h2 id="discover-h">Discover Your Passion, <br />Build Your Skills</h2>
        <p className="lead">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      </header>
      <div className="chips" role="group" aria-label="Course categories">
        {rows.map((row, r) => (
          <div className="chip-row" key={r}>
            {row.map((c) => (
              <button key={c} className={`${c === active ? "on" : ""}${c.startsWith("+") ? " more" : ""}`} aria-pressed={c === active} onClick={() => !c.startsWith("+") && setActive(c)}>{c}</button>
            ))}
          </div>
        ))}
      </div>
      <div className="grid3">{courses.map((c) => <CourseCard key={c.title} c={c} />)}</div>
    </section>
  );
}
