import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { contraindications, practice, protocols, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Behandlingsprotokoll och säkerhet – AC-130 Viper | New York Cryogen Sverige",
  description:
    "Behandlingsalgoritm för medicinsk högtryckskryoterapi med AC-130 Viper: protokoll per kroppsregion, behandlingsparametrar, hudskydd och kontraindikationer.",
};

export default function Protokoll() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className="pagehead">
          <div className="wrap">
            <Link href="/" className="crumb">
              <span aria-hidden>←</span> {site.product}
            </Link>
            <p className="eyebrow">För behandlare</p>
            <h1>Behandlingsprotokoll och säkerhet.</h1>
            <p className="lead">
              Sammanfattning av tillverkarens behandlingsalgoritm för medicinsk högtryckskryoterapi.
            </p>
            <nav className="toc" aria-label="På den här sidan">
              <a href="#parametrar">Parametrar</a>
              <a href="#regioner">Per kroppsregion</a>
              <a href="#sakerhet">Säkerhet</a>
            </nav>
          </div>
        </section>

        {/* PARAMETRAR + REGIONER */}
        <section id="parametrar" className="section section--tint" aria-labelledby="par-h">
          <div className="wrap protocol">
            <div className="protocol__aside">
              <h2 id="par-h">Strukturerat från första sessionen.</h2>
              <dl className="params">
                <div>
                  <dt>Behandlingstid</dt>
                  <dd>2–6 min, i snitt 3–5</dd>
                </div>
                <div>
                  <dt>Frekvens</dt>
                  <dd>Dagligen eller varannan dag</dd>
                </div>
                <div>
                  <dt>Antal behandlingar</dt>
                  <dd>Optimalt resultat vanligtvis efter 3–4</dd>
                </div>
                <div>
                  <dt>Hudtemperatur</dt>
                  <dd>1,7–6,1 °C – mörkblått i termografin</dd>
                </div>
                <div>
                  <dt>Hudskydd</dt>
                  <dd>Obligatoriskt – Viper Skin eller 3M Ioban</dd>
                </div>
              </dl>
              <p className="aside-note">
                Korta intervall mellan behandlingarna ökar sannolikheten för långvarig smärtlindring. Planen
                justeras efter varje session i dialog med patienten.
              </p>
            </div>

            <div id="regioner" className="protocol__list">
              <h2 className="visually-hidden">Protokoll per kroppsregion</h2>
              {protocols.map((p) => (
                <details key={p.region}>
                  <summary>
                    <span className="protocol__region">{p.region}</span>
                    <span className="protocol__time">{p.time}</span>
                  </summary>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </details>
              ))}
              <div className="skin">
                <h3>Varför hudskydd?</h3>
                <p>
                  Skyddsskiktet skyddar mot termisk chock, gör huden vattentät så att kondens inte bildas,
                  och möjliggör högre tryck för djupare penetration. <em>Translucent Viper Skin</em> är
                  återanvändbar och formbar; 3M Ioban är ett engångsalternativ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SÄKERHET */}
        <section id="sakerhet" className="section" aria-labelledby="sak-h">
          <div className="wrap">
            <div className="split split--tight">
              <div className="split__head">
                <p className="eyebrow">Säkerhet</p>
                <h2 id="sak-h">Tydliga gränser för när behandlingen inte ges.</h2>
              </div>
              <p className="prose">
                Behandling ska utföras av utbildad personal enligt gällande protokoll, kontraindikationer och
                professionell bedömning.
              </p>
            </div>
            <div className="safety">
              <div className="safety__col">
                <h3>Kontraindikationer</h3>
                <ol className="contra">
                  {contraindications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ol>
              </div>
              <div className="safety__col">
                <h3>Inför varje behandling</h3>
                <ul className="checklist">
                  {practice.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--compact section--tint">
          <div className="wrap teaser">
            <div>
              <p className="eyebrow">Frågor om protokollet?</p>
              <h2>Vi går igenom upplägget med er klinik.</h2>
            </div>
            <Link href="/#kontakt" className="btn teaser__cta">
              Kontakta {site.contact.name.split(" ")[0]} <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
