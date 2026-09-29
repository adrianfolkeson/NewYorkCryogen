import Link from "next/link";
import { DotsMenu } from "@/components/DotsMenu";
import { site } from "@/lib/content";

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
          <Link href="/#kontakt" className="btn btn--small topbar__cta">
            Kontakta oss
          </Link>
          <DotsMenu />
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

export function PageHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="pagehead">
      <div className="wrap">
        <Link href="/" className="crumb">
          <span aria-hidden>←</span> {site.product}
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="section section--compact section--tint">
      <div className="wrap band">
        <div>
          <p className="eyebrow">Frågor?</p>
          <h2>Vi går igenom upplägget med er klinik.</h2>
        </div>
        <Link href="/#kontakt" className="btn">
          Kontakta {site.contact.name.split(" ")[0]} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
