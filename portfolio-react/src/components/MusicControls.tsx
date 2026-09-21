import type { CSSProperties } from 'react'
import { FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6'
import { useI18n } from '../i18n/context'
import type { MusicControls as Music } from '../hooks/useMusic'

/** Botão de tocar/pausar a trilha sonora. */
export function MusicButton({ music }: { music: Music }) {
  const { t } = useI18n()
  const Icon = music.playing ? FaVolumeHigh : FaVolumeXmark
  return (
    <button
      type="button"
      onClick={music.toggle}
      aria-pressed={music.playing}
      aria-label={t.music.label}
      title={music.playing ? t.music.pause : t.music.play}
      className="grid h-11 w-11 place-items-center rounded-full border border-dore/60 text-dore-claro transition-colors duration-200 hover:bg-dore/15"
    >
      <Icon aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" />
    </button>
  )
}

/** Controle de volume (0 a 100%). */
export function VolumeSlider({ music, className = '' }: { music: Music; className?: string }) {
  const { t } = useI18n()
  const percent = Math.round(music.volume * 100)
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={music.volume}
      onChange={(e) => music.setVolume(Number(e.target.value))}
      aria-label={t.music.volume}
      aria-valuetext={`${percent}%`}
      className={`volume ${className}`}
      style={{ '--fill': `${percent}%` } as CSSProperties}
    />
  )
}
