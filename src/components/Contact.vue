<script setup>
import { ref } from 'vue'
import SectionHead from './SectionHead.vue'

const EMAIL = 'rodi_e_marten@hotmail.com'

const form = ref({ name: '', email: '', subject: '', message: '' })
const status = ref('')

// There is no backend: the form prepares an e-mail in the visitor's mail client.
function handleSubmit() {
  const { name, email, subject, message } = form.value
  const body = `${message}\n\n—\n${name}\n${email}`
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  status.value = 'Ihr E-Mail-Programm wird geöffnet. Falls nichts passiert, schreiben Sie mir bitte direkt an ' + EMAIL + '.'
  window.location.href = href
}
</script>

<template>
  <section id="contact" class="contact sheet theme-ink" aria-labelledby="contact-title">
    <div class="wrap">
      <SectionHead index="06" label="Kontakt" lede="Oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich!">
        <span id="contact-title">Haben Sie ein <span class="serif">Projekt</span> im Sinn?</span>
      </SectionHead>

      <a v-reveal class="contact__mail" :href="'mailto:' + EMAIL">
        <span>{{ EMAIL }}</span>
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
      </a>

      <div class="contact__grid">
        <div class="contact__info">
          <figure v-reveal class="contact__portrait">
            <img
              src="/portfolioimg003.webp"
              alt="Rodi Marten bei Sonnenuntergang am Strand"
              width="745"
              height="690"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <dl v-reveal="100" class="contact__list">
            <div>
              <dt>Standort</dt>
              <dd>
                <address>Birkenfeld 10<br />32278 Kirchlengern<br />Deutschland</address>
              </dd>
            </div>
            <div>
              <dt>E-Mail</dt>
              <dd><a :href="'mailto:' + EMAIL">{{ EMAIL }}</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+4917910158778">+49 179 10158778</a></dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href="https://www.linkedin.com/in/rodi-alain-marten" target="_blank" rel="noopener">
                  linkedin.com/in/rodi-alain-marten<span class="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form v-reveal="150" class="form" @submit.prevent="handleSubmit">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" autocomplete="name" placeholder="Ihr Name" required />
          </div>
          <div class="field">
            <label for="email">E-Mail</label>
            <input id="email" v-model="form.email" type="email" autocomplete="email" placeholder="ihre.email@beispiel.de" required />
          </div>
          <div class="field">
            <label for="subject">Betreff</label>
            <input id="subject" v-model="form.subject" type="text" placeholder="Projektanfrage / Zusammenarbeit" required />
          </div>
          <div class="field">
            <label for="message">Nachricht</label>
            <textarea id="message" v-model="form.message" rows="5" placeholder="Erzählen Sie mir von Ihrem Projekt..." required></textarea>
          </div>

          <button type="submit" class="btn">
            Nachricht senden
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
          </button>
          <p class="form__hint">
            Beim Absenden öffnet sich Ihr E-Mail-Programm, auf dieser Website werden keine Eingaben gespeichert.
            Mehr dazu in der <a href="#/datenschutz">Datenschutzerklärung</a>.
          </p>
          <p class="form__status" role="status">{{ status }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__mail {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  max-width: 100%;
  margin-top: clamp(2.5rem, 6vw, 4.5rem);
  font-size: clamp(1.35rem, 5.2vw, 4.75rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1.1;
  overflow-wrap: anywhere;
}
.contact__mail span {
  background: linear-gradient(var(--lime), var(--lime)) 0 100% / 100% 0.07em no-repeat;
  padding-bottom: 0.08em;
  transition: background-size 0.6s var(--ease), color 0.3s;
}
.contact__mail:hover span {
  color: var(--lime);
}
.contact__mail svg {
  flex: none;
  width: 0.7em;
  height: 0.7em;
  color: var(--lime);
  transition: transform 0.5s var(--ease);
}
.contact__mail:hover svg {
  transform: translate(0.1em, -0.1em);
}

.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  margin-top: clamp(3.5rem, 8vw, 7rem);
  padding-top: clamp(2.5rem, 5vw, 4rem);
  border-top: 1px solid var(--line);
}

.contact__info {
  display: grid;
  gap: 2.5rem;
  align-content: start;
}
.contact__portrait {
  width: min(11rem, 50%);
  aspect-ratio: 4 / 5;
  border-radius: 999px 999px 1rem 1rem;
  overflow: hidden;
  box-shadow: 0 0 0 1px var(--line);
}
.contact__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
}
.contact__list {
  display: grid;
  margin: 0;
}
.contact__list > div {
  display: grid;
  grid-template-columns: 7rem minmax(0, 1fr);
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--line);
}
.contact__list > div:last-child {
  border-bottom: 1px solid var(--line);
}
.contact__list dt {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  padding-top: 0.2em;
}
.contact__list dd {
  margin: 0;
  overflow-wrap: anywhere;
}
.contact__list address {
  font-style: normal;
}
.contact__list a {
  display: inline-block;
  padding-block: 0.3rem;
  background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
  transition: background-size 0.5s var(--ease), color 0.25s;
}
.contact__list a:hover {
  color: var(--lime);
  background-size: 100% 1px;
}

/* Form */
.form {
  display: grid;
  gap: 1.75rem;
  align-content: start;
}
.field {
  display: grid;
  gap: 0.4rem;
}
.field label {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.field input,
.field textarea {
  width: 100%;
  padding: 0.7rem 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid rgba(236, 235, 228, 0.28);
  border-radius: 0;
  font-size: 1.1875rem;
  color: var(--fg);
  transition: border-color 0.3s;
}
.field textarea {
  resize: vertical;
  min-height: 7.5rem;
}
.field input::placeholder,
.field textarea::placeholder {
  color: #7e817a;
}
.field input:hover,
.field textarea:hover {
  border-bottom-color: rgba(236, 235, 228, 0.6);
}
.field input:focus-visible,
.field textarea:focus-visible {
  outline: none;
  border-bottom-color: var(--lime);
  box-shadow: 0 1px 0 0 var(--lime);
}
.form .btn {
  justify-self: start;
  border: 0;
  padding: 1.1rem 1.9rem;
}
.form__hint {
  font-size: 0.875rem;
  color: var(--muted);
}
.form__hint a {
  color: var(--fg);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
.form__hint a:hover {
  color: var(--lime);
}
.form__status {
  min-height: 1.5em;
  font-size: 0.9375rem;
  color: var(--muted);
}

@media (max-width: 56rem) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 30rem) {
  .contact__list > div {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
}
</style>
