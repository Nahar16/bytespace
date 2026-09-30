import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="voices" aria-labelledby="voices-h">
      <div className="container">
        <div className="split voices-head">
          <h2 id="voices-h">Discover What Our <br />Community Is Saying</h2>
          <p className="lead">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="grid3 quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.name}>
              <img className="pic" src={t.img} alt="" width="80" height="80" />
              <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
              <blockquote>“{t.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
