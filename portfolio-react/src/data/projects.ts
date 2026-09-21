import type { IconType } from 'react-icons'
import { FaDiceD20, FaEye, FaImage } from 'react-icons/fa6'

/**
 * Dados dos projetos que não mudam com o idioma.
 * Os textos (título, descrição, métricas) ficam em `src/i18n/copy.ts`.
 *
 * TODO: preencha `links.repo` e `links.demo` com as URLs reais.
 * Enquanto estiverem vazios, o card simplesmente não mostra o botão.
 * Para usar uma captura de tela no lugar da placa decorativa,
 * coloque a imagem em `src/assets/` e informe em `image`.
 */
export type ProjectId = 'vozguia' | 'ssim' | 'ordem'

export interface ProjectMeta {
  id: ProjectId
  featured?: boolean
  icon: IconType
  links: { repo?: string; demo?: string }
  image?: string
}

export const projects: ProjectMeta[] = [
  {
    id: 'vozguia',
    featured: true,
    icon: FaEye,
    links: {},
  },
  {
    id: 'ssim',
    icon: FaImage,
    links: {},
  },
  {
    id: 'ordem',
    icon: FaDiceD20,
    links: {},
  },
]
