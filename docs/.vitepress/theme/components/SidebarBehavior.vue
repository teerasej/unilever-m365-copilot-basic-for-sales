<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
function closeAfterLink(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  if (target?.closest('.VPSidebar.open a[href]')) {
    // VitePress 1.x exposes a fresh state per useSidebar() call, so delegate
    // to the existing backdrop's native close handler rather than new state.
    document.querySelector<HTMLElement>('.VPBackdrop')?.click()
  }
}
onMounted(() => document.addEventListener('click', closeAfterLink, true))
onUnmounted(() => document.removeEventListener('click', closeAfterLink, true))
</script>

<template><span class="sidebar-behavior" aria-hidden="true"></span></template>
