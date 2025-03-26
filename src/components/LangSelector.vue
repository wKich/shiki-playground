<template>
  <div id="lang-selector">
  </div>
</template>

<script lang="ts">
import { Lang } from 'shiki'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    loadedLangs(): Lang[] {
      return this.$store.state.loadedLangs
    },
    unloadedLangs(): Lang[] {
      return this.$store.state.unloadedLangs
    },
    activeLang(): string {
      return this.$store.state.lang
    }
  },
  methods: {
    changeLang(l: string) {
      this.$store.dispatch('changeLang', l)
    },
    loadAndChangeLang(l: Lang) {
      this.$store.dispatch('loadAndChangeLang', l)
    },
    previewLang(l: string) {
      this.$store.dispatch('changePreviewLang', l)
    }
  }
})
</script>

<style>

</style>
