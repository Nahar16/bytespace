import { useId } from "react";

/* Crisp vector versions of the 3D shapes in the design. Purely decorative. */
const SQUIGGLE = "M150 26 C104 14 40 30 42 54 C44 78 160 64 160 92 C160 120 40 104 40 132 C40 160 160 144 160 172 C160 196 100 206 56 204";

function Squiggle({ id, tone }) {
  const lime = tone === "lime";
  return (
    <svg viewBox="0 0 200 230">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={lime ? "#f4ff8a" : "#ffffff"} />
          <stop offset=".5" stopColor={lime ? "#d4fb20" : "#f2f3f7"} />
          <stop offset="1" stopColor={lime ? "#b5e600" : "#d9dbe4"} />
        </linearGradient>
        <filter id={`${id}b`}><feGaussianBlur stdDeviation="2.5" /></filter>
      </defs>
      <path d={SQUIGGLE} transform="translate(5 9)" fill="none" stroke={lime ? "#8db800" : "#b9bcc9"} strokeOpacity=".55" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
      <path d={SQUIGGLE} fill="none" stroke={`url(#${id}g)`} strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
      <path d={SQUIGGLE} transform="translate(-7 -8)" fill="none" stroke="#fff" strokeOpacity={lime ? ".6" : ".9"} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id}b)`} />
    </svg>
  );
}

const COIL = "M60 22 C92 8 124 18 116 34 C108 50 30 52 36 72 C42 92 128 76 122 98 C116 120 32 110 40 134 C46 152 100 156 126 150";

function Coil({ id, tone, sw = 31 }) {
  const lime = tone === "lime";
  return (
    <svg viewBox="0 0 160 190">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={lime ? "#f4ff8a" : "#ffffff"} />
          <stop offset=".5" stopColor={lime ? "#d4fb20" : "#f2f3f7"} />
          <stop offset="1" stopColor={lime ? "#b5e600" : "#d9dbe4"} />
        </linearGradient>
        <filter id={`${id}b`}><feGaussianBlur stdDeviation="2.5" /></filter>
      </defs>
      <path d={COIL} transform="translate(5 8)" fill="none" stroke={lime ? "#8db800" : "#b9bcc9"} strokeOpacity=".5" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d={COIL} fill="none" stroke={`url(#${id}g)`} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d={COIL} transform="translate(-6 -7)" fill="none" stroke="#fff" strokeOpacity={lime ? ".6" : ".9"} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter={`url(#${id}b)`} />
    </svg>
  );
}

function Ring({ id, tone }) {
  const lime = tone === "lime";
  return (
    <svg viewBox="0 0 240 240">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={lime ? "#f4ff8a" : "#ffffff"} />
          <stop offset=".55" stopColor={lime ? "#d4fb20" : "#eef0f5"} />
          <stop offset="1" stopColor={lime ? "#a3d300" : "#cbceda"} />
        </linearGradient>
        <filter id={`${id}b`}><feGaussianBlur stdDeviation="3" /></filter>
      </defs>
      <g transform="rotate(-30 120 120)" fill="none">
        <ellipse cx="124" cy="130" rx="78" ry="66" stroke={lime ? "#86b000" : "#b4b8c6"} strokeOpacity=".5" strokeWidth="62" />
        <ellipse cx="120" cy="120" rx="78" ry="66" stroke={`url(#${id}g)`} strokeWidth="62" />
        <ellipse cx="114" cy="112" rx="78" ry="66" stroke="#fff" strokeOpacity={lime ? ".55" : ".9"} strokeWidth="9" filter={`url(#${id}b)`} />
      </g>
    </svg>
  );
}

function Pyramid({ id, tone }) {
  const lime = tone === "lime";
  const c = lime ? ["#f2ff7a", "#d4fb20", "#a6d300"] : ["#ffffff", "#f1f2f6", "#d5d8e2"];
  return (
    <svg viewBox="0 0 130 140">
      <g strokeLinejoin="round" strokeWidth="9">
        <polygon points="62,6 8,112 76,100" fill={c[0]} stroke={c[0]} />
        <polygon points="62,6 76,100 118,124" fill={c[2]} stroke={c[2]} />
        <polygon points="8,112 76,100 118,124 60,128" fill={c[1]} stroke={c[1]} />
      </g>
    </svg>
  );
}

function Cone({ id, tone }) {
  const lime = tone === "lime";
  return (
    <svg viewBox="0 0 120 170">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={lime ? "#f4ff8a" : "#ffffff"} />
          <stop offset=".55" stopColor={lime ? "#d4fb20" : "#f1f2f6"} />
          <stop offset="1" stopColor={lime ? "#a8d800" : "#d0d3df"} />
        </linearGradient>
      </defs>
      <path fill={`url(#${id}g)`} d="M48 10C52 -2 68 -2 72 10L114 138C120 158 100 168 60 168C20 168 0 158 6 138Z" />
    </svg>
  );
}

function Cylinder({ id, tone }) {
  const lime = tone === "lime";
  return (
    <svg viewBox="0 0 240 340">
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={lime ? "#b9e800" : "#dcdee8"} />
          <stop offset=".3" stopColor={lime ? "#e9ff5c" : "#ffffff"} />
          <stop offset=".7" stopColor={lime ? "#d4fb20" : "#f1f2f6"} />
          <stop offset="1" stopColor={lime ? "#9ccb00" : "#cfd2de"} />
        </linearGradient>
        <radialGradient id={`${id}t`} cx=".4" cy=".4" r=".8">
          <stop offset="0" stopColor={lime ? "#f7ffa8" : "#ffffff"} />
          <stop offset="1" stopColor={lime ? "#cdf500" : "#ecedf3"} />
        </radialGradient>
      </defs>
      <path fill={`url(#${id}g)`} d="M16 60V270A104 48 0 0 0 224 270V60Z" />
      <ellipse cx="120" cy="60" rx="104" ry="48" fill={`url(#${id}t)`} />
    </svg>
  );
}

const kinds = { coil: Coil, squiggle: Squiggle, ring: Ring, pyramid: Pyramid, cone: Cone, cylinder: Cylinder };

/**
 * Placed relative to the left/right edge of a 1440px design frame that is
 * centred in the section, so shapes hug the design on any desktop width.
 */
export function Shape({ kind, tone = "lime", side = "l", x = 0, y = 0, w = 120, rot = 0, sw }) {
  const id = useId().replace(/:/g, "");
  const K = kinds[kind];
  const style = { top: y, width: w, transform: `rotate(${rot}deg)`, [side === "l" ? "left" : "right"]: `calc(var(--edge) + ${x}px)` };
  return <span className="shape" style={style}><K id={id} tone={tone} sw={sw} /></span>;
}

export function Shapes({ items }) {
  return (
    <div className="shapes" aria-hidden="true">
      {items.map((s, i) => <Shape key={i} {...s} />)}
    </div>
  );
}
