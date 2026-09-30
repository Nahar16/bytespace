import cardFaces from "../assets/avatars-card.png";
import heroFaces from "../assets/avatars-hero.png";

/** Row of student faces followed by a lime count badge. */
export default function Avatars({ badge = "26+", size = "card" }) {
  const hero = size === "hero";
  return (
    <div className={`avatars${hero ? " avatars-hero" : ""}`}>
      <img src={hero ? heroFaces : cardFaces} alt="" />
      <b>{badge}</b>
    </div>
  );
}
