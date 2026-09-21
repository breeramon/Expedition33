import { useI18n } from '../i18n/context'
import portrait from '../assets/breno.webp'
import { Journey } from './Journey'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Skills } from './Skills'

export function About() {
  const { t } = useI18n()

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section">
      <SectionHeading id="sobre-title">{t.about.title}</SectionHeading>

      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-14 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-72 md:max-w-none">
          <div className="arch">
            <img src={portrait} alt={t.about.photoAlt} width={809} height={1033} loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6 text-lg leading-relaxed text-toile/85 sm:text-xl">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-toile' : undefined}>
                {p}
              </p>
            ))}
          </div>
          <Journey />
        </Reveal>
      </div>

      <Skills />
    </section>
  )
}
