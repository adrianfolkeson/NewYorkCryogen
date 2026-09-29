"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const categories = [
  { href: "/behandlingsomraden", label: "Behandlingsområden", hint: "Vilka tillstånd som behandlas" },
  { href: "/behandlingsprotokoll", label: "Behandlingsprotokoll", hint: "Parametrar och protokoll per region" },
  { href: "/sakerhet", label: "Säkerhet & Kontraindikationer", hint: "När behandlingen inte ges" },
];

export function DotsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div className="dots" ref={ref}>
      <button
        type="button"
        className="dots__toggle"
        aria-expanded={open}
        aria-controls="dots-panel"
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="dots__icon" aria-hidden>
          <i />
          <i />
          <i />
        </span>
      </button>
      <nav id="dots-panel" className="dots__panel" data-open={open} aria-label="Kategorier" hidden={!open}>
        <ol>
          {categories.map((c, i) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === c.href ? "page" : undefined}
              >
                <span className="dots__n">0{i + 1}</span>
                <span className="dots__text">
                  <span className="dots__label">{c.label}</span>
                  <span className="dots__hint">{c.hint}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
