import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  children: ReactNode
}

/** Título de seção com a linha dourada do site original, agora alinhado à esquerda. */
export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-center gap-6 md:mb-16">
      <h2
        id={id}
        className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none text-toile"
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-gradient-to-r from-dore/70 to-transparent"
      />
    </div>
  )
}
