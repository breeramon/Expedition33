import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Atraso da animação em ms, para escalonar itens de uma lista. */
  delay?: number
  className?: string
}

/**
 * Revela o conteúdo quando ele entra na tela (substitui o AOS do site original).
 * Com "reduzir movimento" ativo, o CSS mostra tudo imediatamente.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Sem IntersectionObserver (navegadores muito antigos), mostra tudo direto.
  const [visible, setVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-in={visible}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
