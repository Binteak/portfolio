import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-lang'
const SUPPORTED = ['en', 'es']

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch {
    // localStorage no disponible: se usa el idioma del navegador
  }

  const browser = (navigator.language || '').toLowerCase()
  return browser.startsWith('es') ? 'es' : 'en'
}

export const lang = ref(initialLang())

watch(
  lang,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // sin persistencia, no pasa nada
    }
    document.documentElement.lang = value
  },
  { immediate: true }
)

export function setLang(value) {
  if (SUPPORTED.includes(value)) lang.value = value
}
