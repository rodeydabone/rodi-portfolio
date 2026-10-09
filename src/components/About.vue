<script setup>
import SectionHead from './SectionHead.vue'

const stats = [
  { value: '4', plus: true, label: 'Jahre Erfahrung' },
  { value: '10', plus: true, label: 'Projekte abgeschlossen' },
  { value: '3', plus: false, label: 'Microsoft Zertifikate' }
]
</script>

<template>
  <section id="about" class="about sheet theme-paper" aria-labelledby="about-title">
    <div class="wrap">
      <SectionHead
        index="01"
        label="Über mich"
        lede="Erfahre mehr über meinen Werdegang und meine Expertise"
      >
        <span id="about-title">Software-/Cloud Developer <span class="serif">aus Kirchlengern</span></span>
      </SectionHead>

      <div class="about__grid">
        <figure v-reveal class="about__figure">
          <div class="about__frame">
            <img
              src="/portfolioimg002.webp"
              alt="Rodi Marten am Meer"
              width="747"
              height="685"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption class="about__caption">Kirchlengern, Deutschland</figcaption>
        </figure>

        <div class="about__text">
          <p v-reveal class="about__lead">
            Ich bin ein ausgebildeter angewandter Informatiker mit Berufserfahrung seit 2021.
            Meine Kenntnisse umfassen die Softwareentwicklung bis hin zur Cloud-Entwicklung,
            mit Fokus auf Cloud-DevOps in aktuellen Projekten.
          </p>
          <p v-reveal="80">
            Mein langfristiges Ziel ist es, mich zum
            <mark class="mark">Cloud-Architekten</mark>
            weiterzuentwickeln, um komplexe IT-Infrastrukturen zu gestalten und innovative Lösungen
            voranzutreiben. Ich bin stets bestrebt, die neuesten Technologien zu erlernen und
            Best Practices anzuwenden.
          </p>
          <p v-reveal="140">
            Mit Erfahrung in Azure Cloud Administration, DevOps-Entwicklung und modernen
            Webtechnologien bringe ich technisches Know-how und Leidenschaft für qualitativ
            hochwertige Software-Lösungen mit.
          </p>
        </div>
      </div>

      <dl class="about__stats">
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i * 100">
          <dt>{{ stat.label }}</dt>
          <dd>{{ stat.value }}<span v-if="stat.plus" class="serif">+</span></dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: start;
  margin-top: clamp(3rem, 7vw, 6rem);
}

.about__figure {
  position: sticky;
  top: 6rem;
}
.about__frame {
  aspect-ratio: 4 / 5;
  border-radius: 2rem;
  overflow: hidden;
  background: var(--paper-2);
}
.about__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  scale: 1.14;
}
.about__caption {
  margin-top: 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.about__text {
  display: grid;
  gap: 1.75rem;
  padding-top: 0.5rem;
  color: var(--muted);
  font-size: 1.1875rem;
  line-height: 1.7;
  text-wrap: pretty;
}
.about__lead {
  color: var(--fg);
  font-size: clamp(1.5rem, 2.9vw, 2.35rem);
  line-height: 1.22;
  letter-spacing: -0.03em;
}

.mark {
  position: relative;
  color: var(--fg);
  background: none;
  white-space: nowrap;
  z-index: 0;
}
.mark::before {
  content: '';
  position: absolute;
  inset: 0.12em -0.15em 0.02em;
  background: var(--lime);
  border-radius: 0.3em;
  z-index: -1;
  transform-origin: 0 50%;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: clamp(4rem, 9vw, 8rem) 0 0;
  border-top: 1px solid var(--line);
}
.about__stats > div {
  display: flex;
  flex-direction: column-reverse;
  padding: 1.75rem 1.5rem 0 0;
}
.about__stats > div + div {
  padding-left: clamp(1rem, 3vw, 2.5rem);
  border-left: 1px solid var(--line);
}
.about__stats dd {
  margin: 0;
  font-size: clamp(3.5rem, 9vw, 8rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.06em;
  font-variant-numeric: tabular-nums;
}
.about__stats dd .serif {
  font-size: 0.9em;
  margin-left: 0.04em;
}
.about__stats dt {
  margin-top: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

/* Parallax inside the frame + highlighter sweep (progressive enhancement) */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .about__frame img {
      animation: parallax linear both;
      animation-timeline: view();
    }
    .mark::before {
      transform: scaleX(0);
      animation: sweep linear both;
      animation-timeline: view();
      animation-range: entry 40% cover 45%;
    }
    @keyframes parallax {
      from {
        translate: 0 -6%;
      }
      to {
        translate: 0 6%;
      }
    }
    @keyframes sweep {
      to {
        transform: scaleX(1);
      }
    }
  }
}

@media (max-width: 56rem) {
  .about__grid {
    grid-template-columns: 1fr;
  }
  .about__figure {
    position: static;
    max-width: 26rem;
  }
  .about__stats {
    grid-template-columns: 1fr;
  }
  .about__stats > div,
  .about__stats > div + div {
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 0;
    border-left: 0;
    border-bottom: 1px solid var(--line);
  }
  .about__stats dd {
    font-size: 3.5rem;
  }
  .about__stats dt {
    margin: 0;
    text-align: right;
  }
}
</style>
