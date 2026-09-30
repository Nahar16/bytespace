import { Search } from "lucide-react";
import Button from "./Button";
import Avatars from "./Avatars";
import { Shapes } from "./Shapes";
import man from "../assets/man-hero.webp";

const shapes = [
  { kind: "squiggle", tone: "lime", side: "l", x: -30, y: 262, w: 215, rot: 24 },
  { kind: "squiggle", tone: "white", side: "l", x: 214, y: 498, w: 108, rot: 30 },
  { kind: "ring", tone: "white", side: "l", x: 66, y: 752, w: 240 },
  { kind: "cylinder", tone: "lime", side: "r", x: -70, y: 236, w: 215, rot: -28 },
  { kind: "pyramid", tone: "white", side: "r", x: 184, y: 486, w: 130, rot: 8 },
  { kind: "squiggle", tone: "white", side: "r", x: 50, y: 700, w: 200, rot: -18 },
];

export default function Hero() {
  return (
    <section className="hero">
      <Shapes items={shapes} />
      <div className="container hero-copy">
        <h1>Get Access to Hundreds <br />Courses Available</h1>
        <p className="lead">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="search-field">
            <Search size={20} strokeWidth={1.75} aria-hidden="true" />
            <input type="search" placeholder="Course, topic, creator" aria-label="Search courses" />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="stage">
        <div className="blob" />
        <div className="disc" />
        <img className="man" src={man} alt="Smiling student with a headset holding a laptop" width="1050" height="1016" />
        <div className="float f-topic">
          <strong>UI/UX Design</strong>
          <small>200 Courses <i>•</i> 1000+ Students</small>
        </div>
        <div className="float f-progress">
          <span>Learning Progress</span>
          <strong className="big">55%</strong>
          <span className="bar"><i /></span>
        </div>
        <div className="float f-happy">
          <strong>Happy Students</strong>
          <small>4.5 <span>(240)</span> <em aria-hidden="true">★</em></small>
          <Avatars size="hero" badge="2K+" />
        </div>
      </div>
    </section>
  );
}
