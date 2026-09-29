import type { Metadata } from "next";
import { ContactBand, PageHead } from "@/components/SiteChrome";
import { protocols } from "@/lib/content";

export const metadata: Metadata = {
  title: "Behandlingsprotokoll – AC-130 Viper | New York Cryogen Sverige",
  description:
    "Behandlingsparametrar och protokoll per kroppsregion för medicinsk högtryckskryoterapi med AC-130 Viper.",
};

export default function Behandlingsprotokoll() {
  return (
    <main id="main">
      <PageHead
        eyebrow="För behandlare"
        title="Behandlingsprotokoll"
        lead="Sammanfattning av tillverkarens behandlingsalgoritm för medicinsk högtryckskryoterapi."
      />

      <section className="section section--tint" aria-labelledby="pro-h">
        <div className="wrap protocol">
          <div className="protocol__aside">
            <h2 id="pro-h">Strukturerat från första sessionen.</h2>
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
          </div>

          <div className="protocol__list">
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

      <ContactBand />
    </main>
  );
}
