import type { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import type { SocialId } from '../data/site'

const icons: Record<SocialId, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
}

export function SocialIcon({ id, className }: { id: SocialId; className?: string }) {
  const Icon = icons[id]
  return <Icon aria-hidden="true" className={className} />
}
