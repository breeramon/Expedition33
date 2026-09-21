import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Controla a trilha sonora. O áudio (14 MB) só é baixado quando a pessoa aperta
 * "tocar" (preload = none) e nunca começa sozinho.
 */
export function useMusic(src: string, initialVolume = 0.2) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolumeState] = useState(initialVolume)

  useEffect(() => {
    const audio = new Audio()
    audio.src = src
    audio.loop = true
    audio.preload = 'none'
    audio.volume = initialVolume
    audioRef.current = audio

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.pause()
      audio.removeAttribute('src')
      audioRef.current = null
    }
  }, [src, initialVolume])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [])

  const setVolume = useCallback((value: number) => {
    const clamped = Math.min(1, Math.max(0, value))
    if (audioRef.current) audioRef.current.volume = clamped
    setVolumeState(clamped)
  }, [])

  return { playing, volume, toggle, setVolume }
}

export type MusicControls = ReturnType<typeof useMusic>
