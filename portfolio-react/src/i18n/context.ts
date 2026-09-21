import { createContext, useContext } from 'react'
import type { Copy } from './copy'

export type Lang = 'pt' | 'en'

export interface I18n {
  lang: Lang
  t: Copy
  toggleLang: () => void
}

export const I18nContext = createContext<I18n | null>(null)

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n deve ser usado dentro de <LanguageProvider>')
  return ctx
}
