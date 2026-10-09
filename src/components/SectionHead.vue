<script setup>
defineProps({
  index: { type: String, required: true },
  label: { type: String, required: true },
  lede: { type: String, default: '' }
})
</script>

<template>
  <header v-reveal class="head">
    <p class="eyebrow"><b>{{ index }}</b> {{ label }}</p>
    <h2 class="head__title"><slot /></h2>
    <p v-if="lede" class="head__lede">{{ lede }}</p>
  </header>
</template>

<style scoped>
.head {
  display: grid;
  gap: 1.5rem;
  max-width: 62rem;
}
.head__title {
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.045em;
  text-wrap: balance;
}
.head__title :deep(.serif) {
  font-size: 1.08em;
  letter-spacing: -0.02em;
}
.head__lede {
  max-width: 38rem;
  color: var(--muted);
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  text-wrap: pretty;
}
</style>
