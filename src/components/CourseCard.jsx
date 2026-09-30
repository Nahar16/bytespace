import { BarChart3, Star } from "lucide-react";
import Avatars from "./Avatars";

export default function CourseCard({ c }) {
  return (
    <a className="course" href="#top" aria-label={`${c.title}, ${c.author}, $${c.price} lifetime`}>
      <div className="thumb">
        <img src={c.img} alt="" loading="lazy" width="333" height="187" />
        <div className="pills"><span>{c.lessons}</span><span>{c.duration}</span><span>{c.comments}</span></div>
      </div>
      <div className="course-row">
        <h3>{c.title}</h3>
        <span className="rating">{c.rating} <Star size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" /></span>
      </div>
      <span className="by">by {c.author}</span>
      <div className="course-row course-meta">
        <span className="level"><BarChart3 size={14} strokeWidth={2} aria-hidden="true" />{c.level}</span>
        <Avatars />
      </div>
      <div className="price">${c.price}<small>/lifetime</small></div>
    </a>
  );
}
