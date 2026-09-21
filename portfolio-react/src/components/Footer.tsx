import { useI18n } from '../i18n/context'
import { site } from '../data/site'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-nuit-3">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-cendre sm:px-8 md:flex-row md:items-start md:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name}. {t.footer.built}
        </p>
        <p className="max-w-md md:text-right">{t.footer.credit}</p>
      </div>
    </footer>
  )
}
