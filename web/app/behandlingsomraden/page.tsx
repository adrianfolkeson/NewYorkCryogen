import type { Metadata } from "next";
import { ContactBand, PageHead } from "@/components/SiteChrome";
import { indications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Behandlingsområden – AC-130 Viper | New York Cryogen Sverige",
  description:
    "Ett system – flera behandlingsområden: rygg och nacke, leder, mjukdelar och idrott samt återhämtning.",
};

export default function Behandlingsomraden() {
  return (
    <main id="main">
      <PageHead
        eyebrow="Ett system – flera behandlingsområden"
        title="Behandlingsområden"
        lead="Korta behandlingstider och en bred indikationslista gör att tjänsten kan integreras i en befintlig fysioterapi-, naprapat- eller idrottsverksamhet."
      />

      <section className="section section--flush-top" aria-label="Tillstånd som behandlas">
        <div className="wrap">
          <div className="indications">
            {indications.map((g) => (
              <div key={g.group}>
                <h2>{g.group}</h2>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
