import PropTypes from "prop-types";
import "../App.css";
import Reveal from "./Reveal";

const capabilityGroups = [
  {
    title: "Full‑Stack",
    points: ["React UI", "Node APIs", "MongoDB"],
  },
  {
    title: "Product",
    points: ["Performance", "Clean architecture", "Testing mindset"],
  },
];

const signalCards = [
  { label: "Core Stack", value: "MERN", sub: "React / Node / MongoDB" },
  { label: "Focus", value: "UI Systems", sub: "Performance + Polish" },
];

export default function Expertise({ isDark }) {
  const cardTone = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white border-black/10";

  return (
    <Reveal
      as="section"
      className="fx-panel w-full p-6 sm:p-8"
      duration={0.9}
    >
      <div className="fx-ring" />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="fx-subtitle">Professional Snapshot</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
                Capability Overview
              </h3>
            </div>
            <span className="fx-chip">Open to Roles</span>
          </div>

          <p className={`mt-4 text-sm sm:text-base ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            A concise view of what I build and how I work — tuned for modern product teams.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-2xl border p-4 ${cardTone}`}
              >
                <h4 className="text-sm font-semibold tracking-[0.2em] uppercase">
                  {group.title}
                </h4>
                <div className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {group.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-3xl border p-5 ${cardTone}`}>
          <p className="fx-subtitle">Signal Panel</p>
          <div className="mt-4 grid gap-3">
            {signalCards.map((card) => (
              <div key={card.label} className="fx-panel p-4">
                <div className="fx-ring" />
                <p className="text-xs tracking-[0.3em] uppercase">
                  {card.label}
                </p>
                <h4 className="mt-2 text-xl font-bold">{card.value}</h4>
                <p className={`text-xs mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {card.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="fx-badge">Frontend</span>
            <span className="fx-badge">Backend</span>
            <span className="fx-badge">UI Systems</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

Expertise.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
