<template>
  <div id="theme-selector">
  </div>
</template>

<script lang="ts">
import { Theme } from 'shiki'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    loadedThemes(): Theme[] {
      return this.$store.state.loadedThemes
    },
    unloadedThemes(): Theme[] {
      return this.$store.state.unloadedThemes
    },
    activeTheme(): string {
      return this.$store.state.theme
    },
    activePreviewTheme(): string {
      return this.$store.state.previewTheme
    }
  },
  methods: {
    loadAndChangeTheme(t: string) {
      this.$store.dispatch('loadAndChangeTheme', t)
    },
    previewTheme(t: string) {
      this.$store.dispatch('changePreviewTheme', t)
    }
  }
})
</script>

<style>
</style>
