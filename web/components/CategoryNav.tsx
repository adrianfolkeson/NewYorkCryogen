"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const categories = [
  { href: "/behandlingsomraden", label: "Behandlingsområden" },
  { href: "/behandlingsprotokoll", label: "Behandlingsprotokoll" },
  { href: "/sakerhet", label: "Säkerhet & Kontraindikationer" },
];

export function CategoryNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  // On narrow screens the row scrolls sideways; keep the current page's button visible.
  useEffect(() => {
    const nav = ref.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (nav && active && nav.scrollWidth > nav.clientWidth) {
      nav.scrollLeft = active.offsetLeft - nav.offsetLeft - 16;
    }
  }, [pathname]);

  return (
    <nav ref={ref} className="catnav" aria-label="Kategorier">
      {categories.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="catnav__link"
          aria-current={pathname === c.href ? "page" : undefined}
        >
          {c.label}
        </Link>
      ))}
    </nav>
  );
}
