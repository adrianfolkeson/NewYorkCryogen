"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

export function MobileMenu({ links }: { links: NavLink[] }) {
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
              <Link href={l.href} onClick={() => setOpen(false)}>
                <span className="mmenu__n">0{i + 1}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
