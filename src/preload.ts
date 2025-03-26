import { Lang, Theme } from 'shiki'

/**
 * - First paint: load JS with GH Dark/Light theme
 * - Then: Load `preloaded` theme/lang in the background
 * - For all other theme/lang, only load when clicked
 */
export const preloadedThemes: Theme[] = ['monokai']
export const preloadedLangs: Lang[] = ['jsonc']

export const asyncLangsToLoad: Lang[] = [
  'ocaml'
]
