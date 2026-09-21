/** Links e dados que não dependem do idioma. */

export const site = {
  name: 'Breno Ramon',
  email: 'breeramon@gmail.com',
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'Breno Ramon',
      href: 'https://www.linkedin.com/in/breno-ramon-018a05233',
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'breeramon',
      href: 'https://github.com/breeramon',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@breenoramon_',
      href: 'https://www.instagram.com/breenoramon_/',
    },
  ],
} as const

export type SocialId = (typeof site.socials)[number]['id']

/** IDs das seções, na ordem da página (mantidos do portfólio original). */
export const sectionIds = ['inicio', 'sobre', 'projetos', 'contato'] as const
export type SectionId = (typeof sectionIds)[number]
