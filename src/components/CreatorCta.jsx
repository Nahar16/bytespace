import Button from "./Button";
import { Shapes } from "./Shapes";

const shapes = [
  { kind: "squiggle", tone: "lime", side: "l", x: -40, y: -70, w: 210, rot: 24 },
  { kind: "squiggle", tone: "white", side: "l", x: 209, y: 30, w: 108, rot: 30 },
  { kind: "pyramid", tone: "lime", side: "r", x: 208, y: 16, w: 134, rot: 8 },
  { kind: "cylinder", tone: "white", side: "r", x: -90, y: 30, w: 215, rot: -28 },
  { kind: "cone", tone: "white", side: "l", x: -8, y: 240, w: 125, rot: -14 },
  { kind: "ring", tone: "lime", side: "l", x: 66, y: 372, w: 245 },
  { kind: "squiggle", tone: "lime", side: "r", x: 60, y: 318, w: 200, rot: -18 },
];

export default function CreatorCta() {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <Shapes items={shapes} />
      <div className="container cta-copy">
        <h2 id="cta-h">Unlock Your Potential as a <br />Creator with ByteSpace</h2>
        <p className="lead">Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Button>Join as Creator</Button>
      </div>
    </section>
  );
}
