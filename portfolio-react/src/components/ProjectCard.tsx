import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { useI18n } from '../i18n/context'
import type { ProjectMeta } from '../data/projects'

function Plate({ project, large }: { project: ProjectMeta; large?: boolean }) {
  const Icon = project.icon
  if (project.image) {
    return <img src={project.image} alt="" className="aspect-[16/8] w-full object-cover" />
  }
  return (
    <div aria-hidden="true" className={`plate ${large ? 'plate-wide' : ''}`}>
      <Icon
        className={`opacity-90 transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none ${
          large ? 'h-16 w-16' : 'h-12 w-12'
        }`}
      />
    </div>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

function Links({ project, title }: { project: ProjectMeta; title: string }) {
  const { t } = useI18n()
  const { repo, demo } = project.links
  if (!repo && !demo) return null
  return (
    <div className="flex flex-wrap gap-3">
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.projects.repo} ${title} ${t.contact.external}`}
          className="btn btn-ghost"
        >
          <FaGithub aria-hidden="true" className="h-4 w-4" />
          {t.projects.repoLabel}
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.projects.demo} ${title} ${t.contact.external}`}
          className="btn btn-primary"
        >
          <FaArrowUpRightFromSquare aria-hidden="true" className="h-3.5 w-3.5" />
          {t.projects.demoLabel}
        </a>
      )}
    </div>
  )
}

export function ProjectCard({ project }: { project: ProjectMeta }) {
  const { t } = useI18n()
  const item = t.projects.items[project.id]
  const metrics = 'metrics' in item ? item.metrics : null

  /* Destaque: descrição de um lado, placa e métricas do outro */
  if (project.featured) {
    return (
      <article
        aria-labelledby={`project-${project.id}`}
        className="group grid border border-nuit-3 bg-nuit-2/60 transition-colors duration-300 hover:border-dore/60 lg:grid-cols-[1.15fr_1fr]"
      >
        <div className="flex flex-col gap-6 p-7 md:p-10">
          <p className="label text-dore">{item.kicker}</p>
          <h3
            id={`project-${project.id}`}
            className="text-[clamp(2.5rem,6vw,4rem)] leading-none text-toile"
          >
            {item.title}
          </h3>
          <p className="max-w-prose text-lg text-toile/80 sm:text-xl">{item.description}</p>
          <Tags tags={item.tags} />
          <Links project={project} title={item.title} />
        </div>

        <div className="border-t border-nuit-3 lg:border-l lg:border-t-0">
          <Plate project={project} large />
          {metrics && 'metricsLabel' in item && (
            <dl
              aria-label={item.metricsLabel}
              className="grid grid-cols-2 gap-px bg-nuit-3 sm:grid-cols-3 lg:grid-cols-2"
            >
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-nuit-2 px-5 py-5 [&:last-child:nth-child(odd)]:col-span-2 sm:[&:last-child:nth-child(odd)]:col-span-1 lg:[&:last-child:nth-child(odd)]:col-span-2"
                >
                  <dt className="label text-cendre">{m.label}</dt>
                  <dd className="sturdy mt-1 font-display text-3xl text-dore-claro">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </article>
    )
  }

  return (
    <article
      aria-labelledby={`project-${project.id}`}
      className="group flex flex-col border border-nuit-3 bg-nuit-2/60 transition duration-300 hover:-translate-y-1 hover:border-dore/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Plate project={project} />
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <p className="label text-dore">{item.kicker}</p>
        <h3 id={`project-${project.id}`} className="text-3xl leading-tight text-toile">
          {item.title}
        </h3>
        <p className="flex-1 text-lg text-toile/80">{item.description}</p>
        <Tags tags={item.tags} />
        <Links project={project} title={item.title} />
      </div>
    </article>
  )
}
