import womanImg from "../assets/woman.jpg";
import { perks } from "../data";
export default function Creator() {
  return (
    <section className="soft soft-2">
      <div className="container split">
        <div className="visual">
          {/* "Happy Students" card and the lime squiggle are baked into this crop */}
          <img className="person sm woman" src={womanImg} alt="Creator with headset and tablet, with a Happy Students rating card" />
          <div className="rev"><small>Total Revenue</small><strong>$120.29</strong></div>
          <div className="rev r2"><small>Year to Date</small><strong>$1,200.38</strong></div>
        </div>
        <div>
          <h2>Create &amp; Manage<br />Courses Easily.</h2>
          <p><b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="checks">{perks.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
