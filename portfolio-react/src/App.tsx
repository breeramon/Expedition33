import { LanguageProvider } from './i18n/LanguageProvider'
import { useI18n } from './i18n/context'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function Page() {
  const { t } = useI18n()
  return (
    <>
      <a
        href="#conteudo"
        className="label fixed left-4 top-4 z-[60] -translate-y-24 bg-dore px-4 py-3 text-nuit focus:translate-y-0"
      >
        {t.skip}
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
