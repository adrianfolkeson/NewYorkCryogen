import Link from "next/link";
import { Photo } from "@/components/Photo";
import { features, site, stages } from "@/lib/content";

// Skala 35 °C → 0 °C, vänster till höger.
const pos = (t: number) => `${((35 - t) / 35) * 100}%`;
const ticks = [35, 30, 25, 20, 15, 10, 5, 0];

export default function Home() {
  const { contact } = site;
  return (
    <main id="main">
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">Högtryckskryoterapi · Nu i Sverige</p>
            <h1 className="reveal">Riktad kyla med kirurgisk precision.</h1>
            <p className="lead reveal">
              {site.product} levererar koldioxid under högt tryck och kyler vävnaden kontrollerat ner
              till det terapeutiska fönstret – på 3–5 minuter per behandling.
            </p>
            <div className="hero__actions reveal">
              <a href="#kontakt" className="btn">
                Boka en genomgång
              </a>
              <Link href="/behandlingsprotokoll" className="textlink">
                Läs behandlingsprotokollet <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <Photo
            file="viper.jpg"
            alt="AC-130 Viper-pistolen med CO₂-stråle"
            className="hero__photo reveal"
            sizes="(max-width: 900px) 100vw, 55vw"
            preload
          />
        </div>

        <div className="wrap">
          <dl className="specs">
            <div>
              <dt>Typisk behandlingstid</dt>
              <dd>3–5 min</dd>
            </div>
            <div>
              <dt>Terapeutisk hudtemperatur</dt>
              <dd>1,7–6,1 °C</dd>
            </div>
            <div>
              <dt>Behandlingar per CO₂-tank</dt>
              <dd>10+</dd>
            </div>
            <div>
              <dt>Munstycken, Rocket Nozzle</dt>
              <dd>4</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* VAD ÄR HPMC */}
      <section className="section" aria-labelledby="hpmc-h">
        <div className="wrap split">
          <div className="split__head">
            <p className="eyebrow">Vad är HPMC?</p>
            <h2 id="hpmc-h">Kyla som når djupare än ytan.</h2>
          </div>
          <div className="prose">
            <p>
              Högtryckskryoterapi (HPMC) – kontrollerad kylteknik med hög precision.
            </p>
            <p>
              Traditionell kryoterapi med flytande kväve eller kall luft verkar huvudsakligen ytligt.
              HPMC håller i stället huden på en exakt temperatur tillräckligt länge för att kylan ska
              tränga ner i djupare vävnad.
            </p>
          </div>
        </div>

        <div className="wrap">
          <table className="compare">
            <caption className="visually-hidden">Jämförelse mellan traditionell kryoterapi och HPMC</caption>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Traditionell kryoterapi</th>
                <th scope="col">HPMC med {site.product}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Kylmedium</th>
                <td>Flytande kväve eller kall luft</td>
                <td>CO₂ under högt tryck</td>
              </tr>
              <tr>
                <th scope="row">Verkan</th>
                <td>Huvudsakligen ytlig</td>
                <td>Skiktad kylning, ytligt och på djupet</td>
              </tr>
              <tr>
                <th scope="row">Precision</th>
                <td>Kyler ett större område</td>
                <td>Riktad, konformad stråle mot målområdet</td>
              </tr>
              <tr>
                <th scope="row">Styrning</th>
                <td>Tid och känsla</td>
                <td>Hudtemperatursensor och termografi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TEKNIKEN */}
      <section id="tekniken" className="section section--tint" aria-labelledby="tek-h">
        <div className="wrap feature">
          <Photo
            file="treatment-back.jpg"
            alt="Behandling av ländryggen med AC-130 Viper"
            className="feature__photo"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="feature__body">
            <p className="eyebrow">Tekniken</p>
            <h2 id="tek-h">Byggd för kontrollerad och precis applicering.</h2>
            <ul className="featurelist">
              {features.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TEMPERATURFÖNSTER */}
      <section className="section" aria-labelledby="temp-h">
        <div className="wrap">
          <div className="split split--tight">
            <div className="split__head">
              <p className="eyebrow">Det terapeutiska fönstret</p>
              <h2 id="temp-h">Kallt nog att verka. Aldrig så kallt att det skadar.</h2>
            </div>
            <div className="prose">
              <p>
                Huden hålls kring 1,7 °C under behandlingen. Det är tillräckligt lågt för att minska
                inflammation och smärta, utan hudirritation eller frostskador som kan uppstå under den
                nivån. Penetrationsdjupet ökar med tiden i fönstret – därför fortsätter appliceringen
                även efter att målvärdet nåtts.
              </p>
            </div>
          </div>

          <figure className="scale" aria-labelledby="scale-cap">
            <div className="scale__track">
              <div className="scale__window" style={{ left: pos(6.11), right: `calc(100% - ${pos(1.66)})` }}>
                <span className="scale__label">1,7–6,1 °C</span>
              </div>
              <div className="scale__frost" style={{ left: pos(1.66) }} />
              <div className="scale__marker" style={{ left: pos(33) }}>
                <span>Normal hud ≈ 33 °C</span>
              </div>
            </div>
            <ol className="scale__ticks" aria-hidden>
              {ticks.map((t) => (
                <li key={t} style={{ left: pos(t) }}>
                  {t}°
                </li>
              ))}
            </ol>
            <figcaption id="scale-cap" className="scale__legend">
              <span className="key key--window">Terapeutiskt fönster</span>
              <span className="key key--frost">Under 1,7 °C: risk för frostskada</span>
            </figcaption>
          </figure>

          <div className="stages">
            <h3 className="stages__title">Fyra fysiologiska stadier styr behandlingstiden</h3>
            <ol>
              {stages.map((s, i) => (
                <li key={s.name}>
                  <span className="stages__n">0{i + 1}</span>
                  <strong>{s.name}</strong>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* METODEN */}
      <section id="metoden" className="section section--tint" aria-labelledby="met-h">
        <div className="wrap feature feature--reverse">
          <Photo
            file="clinic-chair.jpg"
            alt="Behandlingsstol och CO₂-tankar i en klinik"
            className="feature__photo"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="feature__body">
            <p className="eyebrow">Metoden</p>
            <h2 id="met-h">Mät. Behandla. Följ upp.</h2>
            <p className="prose-lead">
              Termografi är en central del av protokollet. Utöver den integrerade sensorn övervakar
              termografikameran omgivande hud – före, under och efter.
            </p>
            <ol className="steps">
              <li>
                <span className="steps__n">01</span>
                <div>
                  <h3>Före</h3>
                  <p>Termografibild identifierar områden med uttalad inflammation och bekräftar smärtområdet.</p>
                </div>
              </li>
              <li>
                <span className="steps__n">02</span>
                <div>
                  <h3>Under</h3>
                  <p>Hudtemperaturen övervakas och appliceringen anpassas efter behandlingsområdet.</p>
                </div>
              </li>
              <li>
                <span className="steps__n">03</span>
                <div>
                  <h3>Efter</h3>
                  <p>
                    Efterbild bekräftar uppnådd temperatur. Mörkblått i termografin inom fönstret indikerar
                    optimal penetration.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* NYTT MUNSTYCKE */}
      <section className="section section--deep" aria-labelledby="noz-h">
        <div className="wrap feature">
          <Photo
            file="nozzle-blue.jpg"
            alt="Det nya blå munstycket till AC-130 Viper"
            className="feature__photo"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="feature__body">
            <p className="eyebrow">Ny utveckling</p>
            <h2 id="noz-h">Mer precist kalibrerat munstycke.</h2>
            <p className="prose-lead">
              Det nya blå munstycket är framtaget för att använda mindre gas från tanken – utan att ge
              avkall på precisionen.
            </p>
            <dl className="duo">
              <div>
                <dt>10+</dt>
                <dd>Kundbehandlingar per tank</dd>
              </div>
              <div>
                <dt>Mindre gas</dt>
                <dd>Lägre driftkostnad och ett effektivare klinikflöde</dd>
              </div>
            </dl>
            <p className="fine">Exakt förbrukning varierar med behandlingsområde och protokoll.</p>
          </div>
        </div>
      </section>

      {/* FÖR KLINIKEN */}
      <section id="kliniken" className="section" aria-labelledby="kli-h">
        <div className="wrap feature feature--reverse">
          <Photo
            file="clinic-room.jpg"
            alt="Behandlingsrum med AC-130 Viper och CO₂-tankar"
            className="feature__photo"
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="feature__body">
            <p className="eyebrow">För kliniken</p>
            <h2 id="kli-h">Teknik och löpande drift i samma upplägg.</h2>
            <p className="prose-lead">
              En ny behandling att addera till klinikens erbjudande – enkel att komma igång med och enkel
              att fortsätta använda.
            </p>
            <ol className="steps steps--compact">
              <li>
                <span className="steps__n">01</span>
                <div>
                  <h3>Tank ingår vid köp</h3>
                  <p>Systemet levereras med en CO₂-tank så att ni kan börja behandla direkt.</p>
                </div>
              </li>
              <li>
                <span className="steps__n">02</span>
                <div>
                  <h3>CO₂-abonnemang</h3>
                  <p>Nya tankar levereras direkt till kliniken.</p>
                </div>
              </li>
              <li>
                <span className="steps__n">03</span>
                <div>
                  <h3>Kontinuitet</h3>
                  <p>Återkommande leveranser – ni slipper hantera inköp av förbrukning själva.</p>
                </div>
              </li>
            </ol>
            <p className="note">Pris och kommersiellt upplägg presenteras vid förfrågan.</p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="section section--tint" aria-labelledby="kon-h">
        <div className="wrap contact">
          <div className="contact__info">
            <p className="eyebrow">Nyfiken på hur det passar er verksamhet?</p>
            <h2 id="kon-h">Låt oss ta nästa steg.</h2>
            <p className="prose-lead">
              Vi berättar gärna mer om systemet, behandlingsupplägget och den kommersiella lösningen för er
              klinik.
            </p>

            <div className="person">
              <p className="person__label">Kontaktperson</p>
              <p className="person__name">{contact.name}</p>
              <p className="person__role">{contact.role}</p>
              <div className="person__links">
                <a href={contact.phoneHref} className="btn">
                  Ring {contact.phone}
                </a>
                {contact.email && (
                  <a href={`mailto:${contact.email}`} className="btn btn--ghost">
                    {contact.email}
                  </a>
                )}
              </div>
            </div>

            <div className="ambassadors">
              <p className="person__label">Ambassadörer</p>
              <ul>
                {site.ambassadors.map((a) => (
                  <li key={a.name}>
                    <span>{a.name}</span>
                    <span className="ambassadors__role">{a.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="inquiry" aria-describedby="inquiry-status">
            <div className="inquiry__head">
              <h3>Skicka en förfrågan</h3>
              <span className="badge">Kommer snart</span>
            </div>
            <p id="inquiry-status" className="inquiry__status">
              Formuläret öppnar inom kort. Fram till dess når du oss snabbast på telefon.
            </p>
            <fieldset disabled>
              <label>
                Namn
                <input name="name" autoComplete="name" />
              </label>
              <label>
                Klinik
                <input name="clinic" autoComplete="organization" />
              </label>
              <div className="inquiry__row">
                <label>
                  Telefon
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  E-post
                  <input name="email" type="email" autoComplete="email" />
                </label>
              </div>
              <label>
                Meddelande
                <textarea name="message" rows={4} />
              </label>
              <button type="submit" className="btn">
                Skicka förfrågan
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    </main>
  );
}
