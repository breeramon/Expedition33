import { useEffect, useState } from 'react'

/** Retorna o id da seção que está no centro da tela, para destacar o link do menu. */
export function useScrollSpy<T extends string>(ids: readonly T[]): T {
  const [active, setActive] = useState<T>(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as T)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
