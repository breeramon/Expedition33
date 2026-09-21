import { useI18n } from '../i18n/context'
import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useI18n()

  return (
    <div className="mt-20 md:mt-24">
      <Reveal>
        <h3 className="mb-8 font-display text-3xl text-toile">{t.skills.title}</h3>
      </Reveal>

      <div className="divide-y divide-nuit-3 border-y border-nuit-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 80}>
            <section
              aria-labelledby={`skills-${group.id}`}
              className="grid gap-4 py-7 md:grid-cols-[13rem_1fr] md:gap-8"
            >
              <h4 id={`skills-${group.id}`} className="label text-dore md:pt-3.5">
                {t.skills.groups[group.id]}
              </h4>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group flex items-center gap-3 border border-nuit-3 bg-nuit-2/60 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-dore/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-dore transition-colors group-hover:text-dore-claro"
                    />
                    <span className="font-mono text-[0.875rem] leading-none text-toile/85">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
