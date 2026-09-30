import { CheckCircle2 } from "lucide-react";
import Avatars from "./Avatars";
import { Shape } from "./Shapes";
import { stats, perks, courses } from "../data";
import manShadow from "../assets/man-shadow.webp";
import woman from "../assets/woman.webp";

const c = courses[0];

/** "Your path to professional growth" + "Create & manage courses" share one soft gradient background. */
export default function Showcase() {
  return (
    <section className="showcase" aria-label="Learn and create">
      <div className="container">
        <div className="split">
          <div className="copy">
            <h2>Your Path to Professional <br />Growth Starts Here!</h2>
            <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
            <dl className="stats">
              {stats.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}
            </dl>
          </div>

          <div className="learn-visual">
            <div className="course mini" aria-hidden="true">
              <div className="thumb">
                <img src={c.img} alt="" width="333" height="187" />
                <div className="pills"><span>{c.lessons}</span><span>{c.duration}</span><span>{c.comments}</span></div>
              </div>
              <div className="course-row"><h3>{c.title}</h3></div>
              <span className="by">by {c.author}</span>
              <div className="course-row course-meta"><span className="level">{c.level}</span><Avatars /></div>
              <div className="price">${c.price}<small>/lifetime</small></div>
            </div>
            <img className="man2" src={manShadow} alt="Student with headset and laptop" width="1260" height="1290" loading="lazy" />
            <div className="float f-progress f-progress2">
              <span>Learning Progress</span>
              <strong className="big">55%</strong>
              <span className="bar"><i /></span>
            </div>
            <Shape kind="coil" tone="lime" side="l" x={454} y={84} w={158} rot={-8} sw={23} />
          </div>
        </div>

        <div className="split split-2">
          <div className="create-visual">
            <div className="rev rev-a"><span>Total Revenue</span><small>July 1-28</small><strong>$120.29</strong><span className="bar"><i /></span></div>
            <div className="rev rev-b"><span>Year to Date</span><small>2023</small><strong>$1,200.38</strong><em>+12$</em></div>
            <img className="woman" src={woman} alt="Course creator with a headset holding a tablet" width="570" height="580" loading="lazy" />
            <Shape kind="coil" tone="lime" side="l" x={355} y={110} w={132} rot={50} />
            <div className="float f-happy2">
              <strong>Happy Students</strong>
              <small>4.5 <span>(240)</span> <em aria-hidden="true">★</em></small>
              <Avatars size="hero" badge="2K+" />
            </div>
          </div>
          <div className="copy">
            <h2>Create &amp; Manage <br />Courses Easily.</h2>
            <p><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <ul className="checks">
              {perks.map((p) => <li key={p}><CheckCircle2 size={20} fill="#003be2" stroke="#fff" strokeWidth={2} aria-hidden="true" />{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
