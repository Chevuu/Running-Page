import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./DonatePage.module.css";
import PageDots from "./PageDots";

export default function DonatePage() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  const pages = [<Boxes t={t} />, <Online t={t} />, <Bank t={t} />];

  const next  = () => setIdx((i) => (i + 1) % pages.length);
  const prev  = () => setIdx((i) => (i - 1 + pages.length) % pages.length);

  return (
    <div className={styles.wrapper}>
      <button onClick={prev} className={styles.arrowLeft}>‹</button>
      <div className={styles.card}>{pages[idx]}</div>
      <button onClick={next} className={styles.arrowRight}>›</button>
      <PageDots total={pages.length} active={idx} />
    </div>
  );
}

/* -------- individual slides -------- */

function Boxes({ t }) {
  return (
    <>
      <h2>{t("boxesTitle")}</h2>
      <p>{t("boxesIntro")}</p>

      <details>
        <summary>Beograd</summary>
        <ul>
          <li>Ekonomski – Kamenička 6</li>
          <li>Veterina – Bulevar oslobođenja 18</li>
          <li>FON – Jove Ilića 154</li>
          <li>FPN – Jove Ilića 165</li>
          <li>Pravoslavni – Mije Kovačevića 11б</li>
          <li>Bezbednost – Gospodara Vučića 50</li>
        </ul>
      </details>

      <details>
        <summary>Niš</summary>
        <p>(lokacije u pripremi)</p>
      </details>

      <details>
        <summary>Novi Sad</summary>
        <ul><li>Medicinski – Hajduk Veljkova 3</li></ul>
      </details>

      <details>
        <summary>Kragujevac</summary>
        <ul>
          <li>PMF – Radoja Domanovića 12</li>
          <li>FMN – Svetozara Markovića 69</li>
        </ul>
      </details>

      <details>
        <summary>Aranđelovac</summary>
        <ul>
          <li>Gimnazija „Miloš Savković”</li>
          <li>Kavana bar</li>
          <li>Avon lokal</li>
        </ul>
      </details>
    </>
  );
}

function Online({ t }) {
  return (
    <>
      <h2>{t("onlineTitle")}</h2>
      <ol>
        <li><a href="https://podrzistudente.org/?lang=en">podrzistudente.org</a></li>
        <li>{t("onlineStep2")}</li>
        <li>{t("onlineStep3")}</li>
      </ol>
      <p><em>{t("onlineTip")}</em></p>
    </>
  );
}

function Bank({ t }) {
  return (
    <>
      <h2>{t("bankTitle")}</h2>
      <p>{t("bankIntro")}</p>

      <pre className={styles.codes}>
265000000723986764 – RSD
265001000002394111 – FX
SWIFT RZBSRSBG
IBAN  RS35265001000002394111
      </pre>

      <details>
        <summary>Instagram podrške</summary>
        <ul>
          <li>@augsburg.uz.studente</li>
          <li>@ulm.je.uz.studente</li>
          <li>@protestpodrske.stutgart</li>
          <li>@blokada.bec</li>
          <li>@linzuzstudente</li>
          <li>@karlsruhe_uz_studente</li>
          <li>@minhenuzstudente</li>
          <li>@salzburguzstudente</li>
          <li>@graz_protest</li>
          <li>@studentuzstudenta</li>
          <li>@luksemburguzstudente</li>
          <li>@strazbur.us.studente</li>
          <li>@palac_gore_brisel__</li>
        </ul>
      </details>
    </>
  );
}