import { stats } from "../data";
import heroImg from "../assets/hero.jpg";
import squiggleLime from "../assets/shape-squiggle-lime.png";
import Avatars from "./Avatars";
export default function CareerPath() {
  return (
    <section className="soft">
      <div className="container split">
        <div>
          <h2>Your Path to Professional<br />Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <dl className="stats">{stats.map(([n, l]) => <div key={l}><dt>{n}</dt><dd>{l}</dd></div>)}</dl>
        </div>
        <div className="visual">
          <div className="photo-frame">
            <img className="shape cp-shape" src={squiggleLime} alt="" aria-hidden="true" />
            <img className="person sm" src={heroImg} alt="Student with laptop" />
            <div className="float f-d"><small>Learning Progress</small><strong className="big">55%</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
