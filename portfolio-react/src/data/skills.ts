import type { IconType } from 'react-icons'
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLayerGroup,
  FaPython,
  FaReact,
} from 'react-icons/fa6'
import { RiAngularjsFill } from 'react-icons/ri'
import { TbBrandCSharp } from 'react-icons/tb'
import {
  SiDotnet,
  SiFlask,
  SiFlutter,
  SiOpencv,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

export type SkillGroupId = 'front' | 'back' | 'mobile' | 'tools'

export interface Skill {
  name: string
  icon: IconType
}

/**
 * Os oito itens do portfólio original (HTML, CSS, JavaScript, React, Python, C#, .NET, Git)
 * continuam aqui, agora agrupados e somados às tecnologias atuais.
 * Nomes de tecnologias não são traduzidos.
 */
export const skillGroups: { id: SkillGroupId; skills: Skill[] }[] = [
  {
    id: 'front',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'AngularJS', icon: RiAngularjsFill },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    id: 'back',
    skills: [
      { name: 'C#', icon: TbBrandCSharp },
      { name: '.NET', icon: SiDotnet },
      { name: 'Entity Framework', icon: FaLayerGroup },
      { name: 'SQL Server', icon: FaDatabase },
      { name: 'Python', icon: FaPython },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    id: 'mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'TensorFlow Lite', icon: SiTensorflow },
      { name: 'OpenCV', icon: SiOpencv },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Vite', icon: SiVite },
    ],
  },
]
