<script setup>
defineProps({
  page: { type: String, required: true }
})
</script>

<template>
  <main id="legal" class="legal theme-ink" tabindex="-1">
    <div class="wrap legal__wrap">
      <a class="legal__back" href="#home">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M13 8H3m4-4L3 8l4 4" /></svg>
        Zurück zur Startseite
      </a>

      <!-- ===================== IMPRESSUM ===================== -->
      <article v-if="page === 'impressum'">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Rodi Alain Marten<br />
          Birkenfeld 10<br />
          32278 Kirchlengern<br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4917910158778">+49 179 10158778</a><br />
          E-Mail: <a href="mailto:rodi_e_marten@hotmail.com">rodi_e_marten@hotmail.com</a>
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Rodi Alain Marten<br />
          Birkenfeld 10<br />
          32278 Kirchlengern
        </p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Ich bin weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten
          verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
          Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter (zum Beispiel LinkedIn und GitHub), auf
          deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich daher keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden
          von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte
          Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich
          um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
          Inhalte umgehend entfernen.
        </p>
      </article>

      <!-- ===================== DATENSCHUTZ ===================== -->
      <article v-else>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
          Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
          Sie persönlich identifiziert werden können.
        </p>
        <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          finden Sie im Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung.
        </p>
        <h3>Wie erfasse ich Ihre Daten?</h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie sie mir mitteilen, zum Beispiel per E-Mail.
          Andere Daten werden automatisch beim Besuch der Website durch den Hosting-Anbieter erfasst
          (technische Daten wie IP-Adresse, Browser, Betriebssystem und Uhrzeit des Seitenaufrufs). Diese
          Website selbst setzt keine Cookies, nutzt keine Analyse- oder Tracking-Werkzeuge und bindet keine
          externen Schriftarten oder Skripte ein.
        </p>
        <h3>Wofür nutze ich Ihre Daten?</h3>
        <p>
          Technische Daten werden erfasst, um die Website fehlerfrei und sicher bereitzustellen. Daten, die
          Sie mir per E-Mail oder Telefon mitteilen, nutze ich ausschließlich, um Ihre Anfrage zu beantworten.
        </p>
        <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten sowie auf Einschränkung der Verarbeitung. Wenn Sie eine
          Einwilligung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Außerdem haben
          Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Hierzu sowie zu weiteren
          Fragen zum Datenschutz können Sie sich jederzeit an mich wenden.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr.
          Street, San Francisco, CA 94107, USA (ein Unternehmen der Microsoft Corporation). Beim Aufruf der
          Website verarbeitet der Hosting-Anbieter technisch notwendige Daten, insbesondere Ihre IP-Adresse,
          Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, die Browserkennung und die übertragene
          Datenmenge (Server-Log-Daten). Details finden Sie in der Datenschutzerklärung von GitHub.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse
          liegt in der sicheren, zuverlässigen und effizienten Bereitstellung dieser Website. Eine
          Übermittlung von Daten in die USA stützt sich auf den Angemessenheitsbeschluss der EU-Kommission
          (EU-US Data Privacy Framework), soweit der Anbieter dort zertifiziert ist, andernfalls auf
          Standardvertragsklauseln.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Rodi Alain Marten<br />
          Birkenfeld 10<br />
          32278 Kirchlengern<br />
          Deutschland
        </p>
        <p>
          Telefon: <a href="tel:+4917910158778">+49 179 10158778</a><br />
          E-Mail: <a href="mailto:rodi_e_marten@hotmail.com">rodi_e_marten@hotmail.com</a>
        </p>
        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten
          gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
          eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
        <p>
          Erfolgt die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO, haben Sie das
          Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die
          Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Die jeweilige Rechtsgrundlage
          entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werde ich Ihre betroffenen
          personenbezogenen Daten nicht mehr verarbeiten, es sei denn, ich kann zwingende schutzwürdige Gründe
          für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
          Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
        </p>
        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
          Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Zuständig für mich ist die
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
          Kavalleriestraße 2–4, 40213 Düsseldorf.
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
          Vertrags automatisiert verarbeite, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen.
        </p>
        <h3>Auskunft, Berichtigung, Sperrung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und gegebenenfalls ein Recht auf Berichtigung, Sperrung oder Löschung dieser
          Daten sowie auf Einschränkung der Verarbeitung.
        </p>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
          SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer
          Browserzeile.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Hosting-Anbieter erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr
          Browser automatisch übermittelt. Das sind: Browsertyp und Browserversion, verwendetes
          Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
          IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird von mir nicht
          vorgenommen. Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (siehe Abschnitt „Hosting“).
        </p>
        <h3>Kontaktformular</h3>
        <p>
          Das Kontaktformular auf dieser Website sendet keine Daten an einen Server. Beim Absenden wird in
          Ihrem Browser lediglich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht geöffnet. Ihre Eingaben
          werden auf dieser Website nicht gespeichert und erst übermittelt, wenn Sie die E-Mail selbst
          absenden. Für die Verarbeitung der E-Mail gilt der folgende Abschnitt.
        </p>
        <h3>Anfrage per E-Mail oder Telefon</h3>
        <p>
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zweck der Bearbeitung Ihres Anliegens bei
          mir gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Die
          Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
          mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse
          an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die
          Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck für die Datenspeicherung entfällt (zum Beispiel nach abgeschlossener
          Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen, insbesondere Aufbewahrungsfristen,
          bleiben unberührt.
        </p>
        <h3>Cookies und lokale Speicherung</h3>
        <p>
          Diese Website setzt keine Cookies und speichert keine Daten im lokalen Speicher Ihres Browsers.
        </p>
        <h3>Schriftarten</h3>
        <p>
          Die verwendeten Schriftarten (Geist, Geist Mono und Instrument Serif) werden von diesem Server
          selbst ausgeliefert. Es erfolgt keine Verbindung zu Servern von Google oder anderen Anbietern.
        </p>
        <h3>Analyse und Tracking</h3>
        <p>
          Es werden keine Analyse-, Tracking- oder Werbewerkzeuge eingesetzt.
        </p>
        <h3>Externe Links</h3>
        <p>
          Diese Website verlinkt auf LinkedIn und GitHub. Erst wenn Sie einen dieser Links anklicken, wird
          eine Verbindung zum jeweiligen Anbieter hergestellt. Für die dortige Datenverarbeitung gelten die
          Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>

        <p class="legal__stand">Stand: Oktober 2026</p>
      </article>
    </div>
  </main>
</template>

<style scoped>
.legal {
  min-height: 100svh;
  padding: clamp(7rem, 14vw, 10rem) 0 clamp(4rem, 9vw, 7rem);
  background: var(--bg);
  color: var(--fg);
}
.legal:focus {
  outline: none;
}
.legal__wrap {
  max-width: 48rem;
}
.legal__back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 0.25s;
}
.legal__back:hover {
  color: var(--lime);
}

h1 {
  font-size: clamp(1.9rem, 8.4vw, 4.75rem);
  overflow-wrap: break-word;
  hyphens: auto;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.045em;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}
h2 {
  margin: 2.75rem 0 0.9rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--line);
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;
}
h3 {
  margin: 1.6rem 0 0.5rem;
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
p {
  color: var(--muted);
  text-wrap: pretty;
}
p + p {
  margin-top: 0.9rem;
}
a {
  color: var(--fg);
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-color: rgba(236, 235, 228, 0.4);
  transition: color 0.25s;
}
a:hover {
  color: var(--lime);
}
.legal__back {
  text-decoration: none;
}
.legal__stand {
  margin-top: 3rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
