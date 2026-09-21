import { useI18n } from '../i18n/context'

/** Alterna entre português e inglês. O rótulo descreve a ação, na língua de destino. */
export function LanguageToggle() {
  const { t, toggleLang } = useI18n()
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.lang.switchLabel}
      lang={t.lang.langCode}
      className="label grid h-11 min-w-11 place-items-center rounded-full border border-nuit-3 px-2 text-cendre transition-colors duration-200 hover:border-dore/60 hover:text-dore-claro"
    >
      {t.lang.short}
    </button>
  )
}
