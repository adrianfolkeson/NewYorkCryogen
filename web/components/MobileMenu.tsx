"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#tekniken", label: "Tekniken" },
  { href: "#metoden", label: "Metoden" },
  { href: "#indikationer", label: "Användning" },
  { href: "#protokoll", label: "Protokoll" },
  { href: "#sakerhet", label: "Säkerhet" },
  { href: "#kliniken", label: "För kliniken" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className="mmenu">
      <button
        type="button"
        className="mmenu__toggle"
        aria-expanded={open}
        aria-controls="mmenu-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mmenu__icon" aria-hidden />
        {open ? "Stäng" : "Meny"}
      </button>
      <nav id="mmenu-panel" className="mmenu__panel" data-open={open} aria-label="Mobilmeny" hidden={!open}>
        <ol>
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                <span className="mmenu__n">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
