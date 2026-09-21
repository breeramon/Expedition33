import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { copy } from './copy'
import { I18nContext, type Lang } from './context'

const STORAGE_KEY = 'portfolio-lang'

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    /* armazenamento indisponível (modo privado etc.): segue com o padrão */
  }
  return 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)
  const t = copy[lang]

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  // Mantém <html lang>, título e descrição em sincronia com o idioma.
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignora */
    }
  }, [lang, t])

  const value = useMemo(() => ({ lang, t, toggleLang }), [lang, t, toggleLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
