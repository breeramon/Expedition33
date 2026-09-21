import { useEffect, useRef, useState } from 'react'
import { FaArrowUpRightFromSquare, FaCheck, FaCopy, FaEnvelope } from 'react-icons/fa6'
import { useI18n } from '../i18n/context'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SocialIcon } from './SocialIcon'

export function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2500)
    } catch {
      /* sem permissão para a área de transferência: o e-mail continua visível na página */
    }
  }

  return (
    <section id="contato" aria-labelledby="contato-title" className="section">
      <SectionHeading id="contato-title">{t.contact.title}</SectionHeading>

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <p className="max-w-xl text-xl text-toile sm:text-2xl sm:leading-relaxed">
            {t.contact.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <FaEnvelope aria-hidden="true" className="h-4 w-4" />
              {t.contact.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn btn-ghost">
              {copied ? (
                <FaCheck aria-hidden="true" className="h-4 w-4" />
              ) : (
                <FaCopy aria-hidden="true" className="h-4 w-4" />
              )}
              {copied ? t.contact.copied : t.contact.copyEmail}
            </button>
            <span role="status" className="sr-only">
              {copied ? t.contact.copied : ''}
            </span>
          </div>
          <p className="mt-5 font-mono text-sm text-cendre">{site.email}</p>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="label mb-2 text-dore">{t.contact.channels}</h3>
          <ul>
            {site.socials.map((s) => (
              <li key={s.id} className="border-b border-nuit-3">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label}, ${s.handle} ${t.contact.external}`}
                  className="group flex min-h-16 items-center gap-4 py-3 transition-colors hover:text-dore-claro"
                >
                  <SocialIcon id={s.id} className="h-5 w-5 shrink-0 text-dore" />
                  <span className="sturdy font-display text-2xl">{s.label}</span>
                  <span className="ml-auto hidden font-mono text-sm text-cendre min-[400px]:inline">
                    {s.handle}
                  </span>
                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                    className="ml-auto h-3.5 w-3.5 shrink-0 text-cendre min-[400px]:ml-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
