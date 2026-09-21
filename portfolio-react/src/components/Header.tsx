import { useEffect, useRef, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useI18n } from '../i18n/context'
import { sectionIds, site, type SectionId } from '../data/site'
import { useMusic } from '../hooks/useMusic'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { LanguageToggle } from './LanguageToggle'
import { MusicButton, VolumeSlider } from './MusicControls'
import { SocialIcon } from './SocialIcon'

const audioSrc = `${import.meta.env.BASE_URL}audio/musicExpedition33.mp3`

export function Header() {
  const { t } = useI18n()
  const music = useMusic(audioSrc, 0.2)
  const active = useScrollSpy(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const links: { id: SectionId; label: string }[] = [
    { id: 'inicio', label: t.nav.home },
    { id: 'sobre', label: t.nav.about },
    { id: 'projetos', label: t.nav.projects },
    { id: 'contato', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu com Esc (devolvendo o foco ao botão) e ao ampliar a janela.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 64rem)')
    const onChange = () => mq.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  const linkClass = (id: SectionId) =>
    `label relative py-2 transition-colors duration-200 hover:text-dore-claro ${
      active === id ? 'text-dore-claro' : 'text-cendre'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? 'border-b border-nuit-3 bg-nuit/85 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-nuit/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:gap-4 sm:px-8">
        <a
          href="#inicio"
          className="inline-flex min-h-11 items-center font-display text-lg italic text-toile transition-colors hover:text-dore-claro sm:text-xl"
        >
          {site.name}
        </a>

        {/* Desktop */}
        <nav aria-label={t.nav.label} className="ml-auto hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={linkClass(link.id)}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-dore transition-transform duration-300 ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2 lg:ml-6">
          <ul aria-label={t.nav.socials} className="mr-2 hidden items-center gap-1 lg:flex">
            {site.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} ${t.contact.external}`}
                  className="grid h-11 w-11 place-items-center text-cendre transition-colors hover:text-dore-claro"
                >
                  <SocialIcon id={s.id} className="h-[1.05rem] w-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
          <VolumeSlider music={music} className="mr-1 hidden w-24 lg:block" />
          <MusicButton music={music} />
          <LanguageToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-nuit-3 text-toile lg:hidden"
          >
            {open ? (
              <FaXmark aria-hidden="true" className="h-4 w-4" />
            ) : (
              <FaBars aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile e tablet */}
      {open && (
        <div
          id="menu-mobile"
          className="menu-in border-t border-nuit-3 px-5 pb-6 pt-2 sm:px-8 lg:hidden"
        >
          <nav aria-label={t.nav.label}>
            <ul>
              {links.map((link) => (
                <li key={link.id} className="border-b border-nuit-3/70">
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`font-display flex min-h-14 items-center text-2xl ${
                      active === link.id ? 'text-dore-claro' : 'text-toile'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-5 flex items-center justify-between gap-6">
            <ul aria-label={t.nav.socials} className="flex items-center gap-1">
              {site.socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} ${t.contact.external}`}
                    className="grid h-11 w-11 place-items-center text-cendre hover:text-dore-claro"
                  >
                    <SocialIcon id={s.id} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
            <VolumeSlider music={music} className="max-w-44 flex-1" />
          </div>
        </div>
      )}
    </header>
  )
}
