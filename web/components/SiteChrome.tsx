import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { site } from "@/lib/content";

export const navLinks = [
  { href: "/#tekniken", label: "Tekniken" },
  { href: "/#metoden", label: "Metoden" },
  { href: "/#indikationer", label: "Användning" },
  { href: "/protokoll", label: "Protokoll" },
  { href: "/#kliniken", label: "För kliniken" },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip" href="#main">
        Hoppa till innehållet
      </a>
      <header className="topbar">
        <div className="wrap topbar__inner">
          <Link href="/" className="wordmark" aria-label="New York Cryogen – startsida">
            <span className="wordmark__name">New York Cryogen</span>
            <span className="wordmark__region">Sverige</span>
          </Link>
          <nav aria-label="Huvudmeny" className="nav">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/#kontakt" className="btn btn--small topbar__cta">
            Kontakta oss
          </Link>
          <MobileMenu links={[...navLinks, { href: "/#kontakt", label: "Kontakt" }]} />
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { contact } = site;
  return (
    <>
      <footer className="footer">
        <div className="wrap footer__inner">
          <div>
            <p className="wordmark__name">New York Cryogen</p>
            <p className="footer__muted">
              {site.company} · Svensk distributions- och leveranspartner för New York Cryogen
            </p>
            <p className="footer__muted">Org.nr {site.orgNr}</p>
          </div>
          <p className="footer__disclaimer">
            Informationen riktar sig till vårdgivare och kliniker. Behandling ska utföras enligt gällande
            protokoll, kontraindikationer och professionell bedömning.
          </p>
        </div>
      </footer>

      <div className="actionbar" aria-label="Snabbkontakt">
        <a href={contact.phoneHref} className="btn">
          Ring {contact.name.split(" ")[0]}
        </a>
        <a href={`mailto:${contact.email}`} className="btn btn--ghost">
          Mejla oss
        </a>
      </div>
    </>
  );
}

// Native <details> "Läs mer" – works without JS, keyboard accessible.
export function ReadMore({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="more">
      <summary>
        <span className="more__closed">{label}</span>
        <span className="more__open">Visa mindre</span>
      </summary>
      <div className="more__body">{children}</div>
    </details>
  );
}
