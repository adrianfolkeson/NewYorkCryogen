import type { Metadata } from "next";
import { ContactBand, PageHead } from "@/components/SiteChrome";
import { contraindications, practice } from "@/lib/content";

export const metadata: Metadata = {
  title: "Säkerhet & Kontraindikationer – AC-130 Viper | New York Cryogen Sverige",
  description:
    "Kontraindikationer och säkerhetsrutiner för högtryckskryoterapi med AC-130 Viper.",
};

export default function Sakerhet() {
  return (
    <main id="main">
      <PageHead
        eyebrow="Tydliga gränser för när behandlingen inte ges"
        title="Säkerhet & Kontraindikationer"
        lead="Behandling ska utföras av utbildad personal enligt gällande protokoll, kontraindikationer och professionell bedömning."
      />

      <section className="section section--flush-top" aria-label="Kontraindikationer och rutiner">
        <div className="wrap">
          <div className="safety">
            <div className="safety__col">
              <h2>Kontraindikationer</h2>
              <ol className="contra">
                {contraindications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ol>
            </div>
            <div className="safety__col">
              <h2>Inför varje behandling</h2>
              <ul className="checklist">
                {practice.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
