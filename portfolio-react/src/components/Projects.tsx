import { useI18n } from '../i18n/context'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const { t } = useI18n()
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="section">
      <SectionHeading id="projetos-title">{t.projects.title}</SectionHeading>
      <p className="-mt-6 mb-12 max-w-xl text-lg text-cendre md:-mt-10 md:mb-14">{t.projects.intro}</p>

      <div className="grid gap-6 md:gap-8">
        {featured.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 100} className="flex">
              <div className="flex w-full flex-col [&>article]:flex-1">
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
