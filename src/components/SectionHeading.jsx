export default function SectionHeading({ title, text, light, align = "center" }) {
  return (
    <header className={`sh ${light ? "sh-light" : ""} sh-${align}`}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}
