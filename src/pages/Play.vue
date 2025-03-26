<template>
  <div id="play-container">
    <div class="container">
      <ThemeSelector />
      <LangSelector />
      <Previewer />
      <Editor />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LangSelector from '../components/LangSelector.vue'
import ThemeSelector from '../components/ThemeSelector.vue'
import Previewer from '../components/Previewer.vue'
import Editor from '../components/Editor.vue'
import { BUNDLED_LANGUAGES } from 'shiki'
import { asyncLangsToLoad } from '../preload'

export default defineComponent({
  name: 'App',
  components: {
    ThemeSelector,
    LangSelector,
    Previewer,
    Editor
  },
  async beforeMount() {
    let theme = 'monokai'
    try {
      theme = JSON.parse(localStorage.getItem('themeCode')) || theme
    } catch {}
    this.$store.dispatch('loadAndChangeTheme', theme)
    this.$store.dispatch('loadAndChangeLang', 'ocaml')
  }
})
</script>

<style>
#play-container {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  overflow-y: hidden;
}
.container {
  display: grid;
  grid-template-columns: max-content max-content auto auto max-content;
  flex-flow: row nowrap;
  overflow-y: auto;
  height: 100%;
}
</style>
