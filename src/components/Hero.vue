<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const root = ref(null)
const glow = ref(null)
const float = ref(null)

const facts = [
  { value: 'Seit 2021', label: 'Berufserfahrung' },
  { value: 'Azure · Terraform · Docker', label: 'Stack' },
  { value: '2× Microsoft', label: 'Zertifizierungen' }
]

// Pointer-reactive glow + depth. Only runs on fine-pointer devices, only while the
// hero is on screen, and writes nothing but transforms inside a single rAF.
let visibilityObserver
let frame = 0
let px = 0
let py = 0
let listening = false

function paint() {
  frame = 0
  const nx = px / window.innerWidth - 0.5
  const ny = py / window.innerHeight - 0.5
  glow.value.style.transform = `translate3d(${px}px, ${py}px, 0)`
  float.value.style.transform = `translate3d(${(-nx * 18).toFixed(1)}px, ${(-ny * 14).toFixed(1)}px, 0)`
}

function onMove(e) {
  px = e.clientX
  py = e.clientY
  if (!frame) frame = requestAnimationFrame(paint)
}

function setListening(on) {
  if (on === listening) return
  listening = on
  if (on) {
    window.addEventListener('pointermove', onMove, { passive: true })
    glow.value.classList.add('is-on')
  } else {
    window.removeEventListener('pointermove', onMove)
    glow.value?.classList.remove('is-on')
    if (frame) cancelAnimationFrame(frame)
    frame = 0
  }
}

onMounted(() => {
  const canTrack = window.matchMedia(
    '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
  ).matches
  if (!canTrack) return
  visibilityObserver = new IntersectionObserver(([entry]) => setListening(entry.isIntersecting))
  visibilityObserver.observe(root.value)
})

onUnmounted(() => {
  visibilityObserver?.disconnect()
  setListening(false)
})
</script>

<template>
  <section id="home" ref="root" class="hero theme-ink" aria-labelledby="hero-title">
    <div class="hero__bg" aria-hidden="true"></div>
    <div ref="glow" class="hero__glow" aria-hidden="true"></div>

    <div class="wrap hero__inner">
      <h1 id="hero-title" class="hero__title">
        <span class="hero__hello eyebrow">Hallo, ich bin</span>
        <span class="line"><span class="word hero__rodi">Rodi</span></span>
        <span class="line"><span class="word hero__marten serif">Marten</span></span>
      </h1>

      <div ref="float" class="hero__float">
        <figure class="hero__portrait">
          <img
            src="/portfolioimg001.jpeg"
            alt="Portrait von Rodi Marten"
            width="749"
            height="688"
            fetchpriority="high"
            decoding="async"
          />
        </figure>

        <div class="plan" aria-hidden="true">
          <div class="plan__bar"><span>plan.tf</span><i></i></div>
          <p style="--n: 0"><b class="chg">~</b> rolle <span>"Cloud-DevOps" → <em>"Cloud-Architekt"</em></span></p>
          <p style="--n: 1"><b class="add">+</b> iac <span>terraform</span></p>
          <p style="--n: 2"><b class="add">+</b> pipelines <span>azure_devops</span></p>
          <p class="plan__sum" style="--n: 3">Plan: 2 hinzufügen, 1 ändern.</p>
        </div>
      </div>

      <div class="hero__lead">
        <p class="hero__role">
          Software-/Cloud Developer mit Fokus auf <span class="serif">Cloud-DevOps</span> und moderne Webtechnologien.
        </p>
        <p class="hero__text">
          Ich entwickle skalierbare Lösungen und optimiere IT-Infrastrukturen für effiziente und innovative Anwendungen.
        </p>
        <div class="hero__cta">
          <a class="btn" href="#projects">
            Projekte ansehen
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg>
          </a>
          <a class="btn btn--ghost" href="#contact">Kontakt aufnehmen</a>
        </div>
      </div>

      <dl class="hero__facts">
        <div v-for="fact in facts" :key="fact.label">
          <dt>{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: end;
  padding: clamp(6rem, 11svh, 7.5rem) 0 calc(var(--sheet) + 1.5rem);
  background: var(--bg);
  color: var(--fg);
  overflow: clip;
  isolation: isolate;
}

/* Static backdrop: soft colour pools, a faint grid, and grain. No filters, no animation. */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(60rem 38rem at 85% 18%, rgba(255, 95, 168, 0.17), transparent 62%),
    radial-gradient(52rem 40rem at 62% 78%, rgba(108, 155, 255, 0.14), transparent 60%),
    linear-gradient(rgba(236, 235, 228, 0.045) 1px, transparent 1px) 0 0 / 100% 5.5rem,
    linear-gradient(90deg, rgba(236, 235, 228, 0.045) 1px, transparent 1px) 0 0 / 5.5rem 100%;
  -webkit-mask-image: linear-gradient(#000 60%, transparent);
  mask-image: linear-gradient(#000 60%, transparent);
}
.hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero__glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 36rem;
  height: 36rem;
  margin: -18rem 0 0 -18rem;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(205, 245, 69, 0.13), transparent);
  opacity: 0;
  transition: opacity 0.6s;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
}
.hero__glow.is-on {
  opacity: 1;
}

.hero__inner {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(0.75rem, 2vw, 1.5rem);
  row-gap: clamp(1.25rem, 3svh, 2rem);
  align-items: end;
}

/* ----- Title ----- */
.hero__title {
  grid-column: 1 / 10;
  grid-row: 1 / 3;
  align-self: start;
  position: relative;
  z-index: 2;
  margin-left: -0.05em;
  display: grid;
  font-weight: 500;
  font-size: clamp(4.75rem, min(16.5vw, 24svh), 15.5rem);
  line-height: 0.86;
  letter-spacing: -0.065em;
}
.hero__hello {
  font-size: 0.8125rem;
  line-height: 1.4;
  letter-spacing: 0.08em;
  margin-bottom: clamp(1.25rem, 4svh, 2.5rem);
}
.line {
  display: block;
  overflow: hidden;
  padding: 0.06em 0.08em 0.1em;
  margin: -0.06em -0.08em -0.1em;
}
.word {
  display: inline-block;
}
.hero__marten {
  font-size: 1.04em;
  letter-spacing: -0.045em;
  margin-left: 0.55em;
  color: var(--lime);
}

/* ----- Portrait + plan ----- */
.hero__float {
  grid-column: 8 / 13;
  grid-row: 1 / 3;
  align-self: start;
  position: relative;
  justify-self: end;
  width: min(100%, 22rem, 39svh);
  margin-bottom: 2rem;
  will-change: transform;
  transition: transform 0.9s var(--ease);
}
.hero__portrait {
  position: relative;
  aspect-ratio: 4 / 5.15;
  border-radius: 999px 999px 1.5rem 1.5rem;
  overflow: hidden;
  background: var(--ink-3);
  box-shadow: 0 0 0 1px var(--line), 0 2.5rem 6rem -1.5rem rgba(0, 0, 0, 0.6);
}
.hero__portrait::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11, 12, 14, 0.55), transparent 40%);
}
.hero__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 30%;
}

.plan {
  position: absolute;
  right: -1rem;
  bottom: -2.75rem;
  z-index: 3;
  width: max-content;
  padding: 0.85rem 1rem 1rem;
  background: rgba(19, 21, 24, 0.82);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(236, 235, 228, 0.16);
  border-radius: 1rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.7;
  color: #bfc2ba;
  box-shadow: 0 1.5rem 3rem -1rem rgba(0, 0, 0, 0.6);
}
.plan__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  color: #8d9088;
  letter-spacing: 0.04em;
}
.plan__bar i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--lime);
}
.plan p {
  display: flex;
  gap: 0.6rem;
  white-space: nowrap;
}
.plan p span {
  color: var(--paper);
  margin-left: auto;
  padding-left: 1.25rem;
}
.plan em {
  font-style: normal;
  color: var(--lime);
}
.plan b {
  font-weight: 500;
}
.plan .add {
  color: var(--lime);
}
.plan .chg {
  color: #ffb454;
}
.plan__sum {
  margin-top: 0.45rem;
  padding-top: 0.45rem;
  border-top: 1px dashed rgba(236, 235, 228, 0.18);
  color: var(--paper);
}

/* ----- Lead ----- */
.hero__lead {
  grid-column: 1 / 9;
  grid-row: 3 / 4;
  display: grid;
  gap: 1.1rem;
  align-self: end;
}
.hero__role {
  font-size: clamp(1.4rem, 2.6vw, 2.15rem);
  line-height: 1.15;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-wrap: balance;
}
.hero__role .serif {
  font-size: 1.12em;
  color: var(--lime);
}
.hero__text {
  max-width: 30rem;
  color: var(--muted);
  font-size: 1.0625rem;
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

/* ----- Facts ----- */
.hero__facts {
  grid-column: 9 / -1;
  grid-row: 3 / 4;
  align-self: end;
  display: grid;
  gap: 0;
  margin: 0;
  border-top: 1px solid var(--line);
}
.hero__facts dt {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.hero__facts > div {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--line);
}
.hero__facts dd {
  margin: 0.15rem 0 0;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  font-weight: 500;
  letter-spacing: -0.02em;
}

@media (min-width: 62.01rem) {
  .hero__facts > div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }
  .hero__facts dd {
    margin: 0;
  }
  .hero__facts dt,
  .hero__facts dd {
    white-space: nowrap;
  }
}

/* ----- Entrance (runs once) ----- */
@media (prefers-reduced-motion: no-preference) {
  .word {
    transform: translate3d(0, 108%, 0);
    animation: rise 1.2s var(--ease) 0.15s forwards;
  }
  .hero__marten {
    animation-delay: 0.3s;
  }
  .hero__hello,
  .hero__lead > *,
  .hero__facts > * {
    opacity: 0;
    transform: translate3d(0, 1.25rem, 0);
    animation: fade-up 1s var(--ease) forwards;
  }
  .hero__hello {
    animation-delay: 0.05s;
  }
  .hero__role {
    animation-delay: 0.55s;
  }
  .hero__text {
    animation-delay: 0.65s;
  }
  .hero__cta {
    animation-delay: 0.75s;
  }
  .hero__facts > * {
    animation-delay: calc(0.9s + var(--k, 0) * 90ms);
  }
  .hero__facts > :nth-child(2) {
    --k: 1;
  }
  .hero__facts > :nth-child(3) {
    --k: 2;
  }
  .hero__portrait {
    clip-path: inset(100% 0 0 0 round 999px 999px 1.5rem 1.5rem);
    animation: unveil 1.4s var(--ease) 0.25s forwards;
  }
  .hero__portrait img {
    transform: scale(1.25);
    animation: settle 1.8s var(--ease) 0.25s forwards;
  }
  .plan {
    opacity: 0;
    transform: translate3d(0, 1.5rem, 0);
    animation: fade-up 1s var(--ease) 1s forwards;
  }
  .plan p {
    opacity: 0;
    animation: type-in 0.6s var(--ease) forwards;
    animation-delay: calc(1.25s + var(--n) * 0.22s);
  }
}

@keyframes rise {
  to {
    transform: none;
  }
}
@keyframes fade-up {
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes unveil {
  to {
    clip-path: inset(0 0 0 0 round 999px 999px 1.5rem 1.5rem);
  }
}
@keyframes settle {
  to {
    transform: none;
  }
}
@keyframes type-in {
  from {
    opacity: 0;
    transform: translate3d(-0.5rem, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* ----- Scroll-driven exit (progressive enhancement, compositor-only properties) ----- */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .hero__rodi,
    .hero__marten {
      animation:
        rise 1.2s var(--ease) 0.15s forwards,
        split linear both;
      animation-timeline: auto, view();
      animation-range: normal, exit 0% exit 90%;
    }
    .hero__rodi {
      --dir: -1;
    }
    .hero__marten {
      --dir: 1;
      animation-delay: 0.3s, 0s;
    }
    .hero__float {
      animation: drift linear both;
      animation-timeline: view();
      animation-range: exit 0% exit 100%;
    }
    @keyframes split {
      to {
        translate: calc(var(--dir) * 7vw) 0;
        opacity: 0.15;
      }
    }
    @keyframes drift {
      to {
        translate: 0 -9svh;
      }
    }
  }
}

/* ----- Tablet / mobile ----- */
@media (max-width: 62rem) {
  .hero {
    align-items: start;
  }
  .hero__inner {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 2rem;
  }
  .hero__title,
  .hero__float,
  .hero__lead,
  .hero__facts {
    grid-column: 1;
    grid-row: auto;
  }
  .hero__title {
    font-size: clamp(4.5rem, 24vw, 12rem);
  }
  .hero__marten {
    margin-left: 0.35em;
  }
  .hero__float {
    justify-self: start;
    width: min(76%, 22rem);
    margin-top: -0.5rem;
  }
  .plan {
    left: auto;
    right: -1rem;
    bottom: -1.5rem;
    transform-origin: 100% 100%;
  }
  .hero__lead {
    margin-top: 1.5rem;
  }
  .hero__facts {
    margin-top: 0.5rem;
  }
}

@media (max-width: 62rem) and (min-width: 40rem) {
  .hero__inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .hero__title {
    grid-column: 1 / -1;
  }
  .hero__float {
    grid-column: 2;
    grid-row: 2 / 4;
    justify-self: end;
    width: 100%;
    margin-top: 0;
  }
  .hero__lead {
    grid-column: 1;
    grid-row: 2 / 4;
    margin-top: 0;
    align-self: center;
  }
  .hero__facts {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    border-bottom: 0;
  }
  .hero__facts > div {
    border-bottom: 0;
  }
}

@media (max-width: 40rem) {
  .hero__float {
    width: 100%;
  }
  .hero__portrait {
    width: 78%;
  }
  .plan {
    position: relative;
    inset: auto;
    width: calc(100% - 1.25rem);
    max-width: none;
    margin: -3.25rem 0 0 auto;
    font-size: 0.6875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__float {
    transition: none;
  }
}
</style>
