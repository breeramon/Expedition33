import { useEffect, useRef, type CSSProperties } from 'react'
import { useI18n } from '../i18n/context'
import hero1280 from '../assets/hero-1280.webp'
import hero2400 from '../assets/hero-2400.webp'
import heroPortrait from '../assets/hero-portrait.webp'

const DEFAULT_POS = { x: 0.6, y: 0.42 }

/** A mesma arte em duas camadas: uma escura (base) e outra clara, revelada só sob a lanterna. */
function Art({ eager }: { eager?: boolean }) {
  return (
    <picture>
      <source media="(max-width: 47.99rem)" srcSet={heroPortrait} />
      <img
        src={hero1280}
        srcSet={`${hero1280} 1280w, ${hero2400} 2400w`}
        sizes="100vw"
        alt=""
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className="h-full w-full object-cover object-[50%_35%]"
      />
    </picture>
  )
}

export function Hero() {
  const { t } = useI18n()
  const h = t.hero
  const ref = useRef<HTMLElement>(null)

  // Clair-obscur: a luz segue o ponteiro (só com mouse/trackpad).
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const current = { ...DEFAULT_POS }
    const target = { ...DEFAULT_POS }
    let frame = 0

    const paint = () => {
      const ease = reduce.matches ? 1 : 0.14
      current.x += (target.x - current.x) * ease
      current.y += (target.y - current.y) * ease
      el.style.setProperty('--lx', `${(current.x * 100).toFixed(2)}%`)
      el.style.setProperty('--ly', `${(current.y * 100).toFixed(2)}%`)
      const settled = Math.abs(target.x - current.x) < 0.0005 && Math.abs(target.y - current.y) < 0.0005
      frame = settled ? 0 : requestAnimationFrame(paint)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      target.x = (e.clientX - rect.left) / rect.width
      target.y = (e.clientY - rect.top) / rect.height
      schedule()
    }
    const onLeave = () => {
      target.x = DEFAULT_POS.x
      target.y = DEFAULT_POS.y
      schedule()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties

  return (
    <section
      id="inicio"
      ref={ref}
      aria-labelledby="hero-title"
      className="hero relative isolate flex min-h-[100svh] items-end overflow-hidden bg-nuit"
    >
      {/* Fundo: camada escura + camada clara revelada pela lanterna */}
      <div aria-hidden="true" className="lantern-dim absolute inset-0 -z-30">
        <Art eager />
      </div>
      <div aria-hidden="true" className="lantern-lit absolute inset-0 -z-20">
        <Art />
      </div>
      {/* Legibilidade do texto e fusão com a próxima seção */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-nuit)_2%,rgb(10_11_16/0.74)_34%,rgb(10_11_16/0.5)_70%,rgb(10_11_16/0.3)_100%),linear-gradient(to_right,rgb(10_11_16/0.78),transparent_66%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 md:pb-24">
        <p className="label rise flex items-center gap-4 text-dore-claro" style={delay(100)}>
          <span aria-hidden="true" className="h-px w-10 bg-dore" />
          {h.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="rise mt-6 text-[clamp(3.75rem,13.5vw,9.5rem)] leading-[0.9] text-toile"
          style={delay(220)}
        >
          <span className="block">{h.firstName}</span>{' '}
          <span className="block font-medium italic text-dore-claro">{h.lastName}</span>
        </h1>

        <p
          className="rise mt-6 font-display text-2xl italic text-toile/90 sm:text-3xl"
          style={delay(380)}
        >
          {h.role}
        </p>

        <p className="rise mt-5 max-w-xl text-lg text-toile/80 sm:text-xl" style={delay(480)}>
          {h.lead}
        </p>

        <div className="rise mt-9 flex flex-wrap gap-3" style={delay(600)}>
          <a href="#projetos" className="btn btn-primary">
            {h.ctaProjects}
          </a>
          <a href="#contato" className="btn btn-ghost">
            {h.ctaContact}
          </a>
        </div>

        <ul
          aria-label={h.stackLabel}
          className="label rise mt-12 flex flex-wrap gap-x-7 gap-y-3 text-cendre"
          style={delay(720)}
        >
          {h.stack.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-dore" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
