// v-reveal: fades/slides an element in once when it first scrolls into view.
// One shared IntersectionObserver; each element is unobserved after it reveals.
let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
  }
  return observer
}

export default {
  mounted(el, binding) {
    const delay = Number(binding.value) || 0
    if (delay) el.style.setProperty('--d', delay)
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
