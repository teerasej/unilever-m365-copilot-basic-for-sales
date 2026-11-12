<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import artwork from '../practice-art.json'

type Art = { src: string; width: number; height: number; alt: string; variants: { src: string; width: number }[] }
const props = defineProps<{ id: string }>()
const art = computed(() => (artwork as Record<string, Art>)[props.id])
const compact = computed(() => props.id.startsWith('quick-'))
const first = computed(() => /-01$/.test(props.id))
const srcset = computed(() => art.value?.variants.map(v => `${withBase(v.src)} ${v.width}w`).join(', '))
</script>

<template>
  <figure v-if="art" class="practice-illustration" :class="{ compact }" :data-practice-art="id">
    <img
      :src="withBase(art.src)" :srcset="srcset" sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(100vw - 336px), 688px"
      :width="art.width" :height="art.height" :alt="art.alt"
      :loading="first ? 'eager' : 'lazy'" decoding="async"
    >
  </figure>
</template>
