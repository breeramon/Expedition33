import { useI18n } from '../i18n/context'

/** Formação e experiência, sem datas inventadas: cada item é só o que é verdade. */
export function Journey() {
  const { t } = useI18n()
  const j = t.journey

  const groups = [
    { id: 'education', label: j.education, items: [j.items.unit, j.items.anhanguera] },
    { id: 'experience', label: j.experience, items: [j.items.indra, j.items.ssp] },
  ]

  return (
    <div className="mt-12 grid gap-8 border-t border-nuit-3 pt-10 sm:grid-cols-2">
      <h3 className="sr-only">{j.title}</h3>
      {groups.map((group) => (
        <section key={group.id} aria-labelledby={`journey-${group.id}`}>
          <h4 id={`journey-${group.id}`} className="label mb-4 text-dore">
            {group.label}
          </h4>
          <ul className="space-y-4">
            {group.items.map((item) => (
              <li key={item.name} className="border-l border-dore/40 pl-4">
                <p className="font-display text-xl leading-tight text-toile">{item.name}</p>
                <p className="mt-1 text-base text-cendre">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
