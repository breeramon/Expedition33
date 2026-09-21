/**
 * Todo o texto do site vive aqui, em português e inglês.
 * Para editar um texto, altere-o nos dois objetos (`pt` e `en`).
 * O TypeScript avisa se uma chave existir em um idioma e faltar no outro.
 */

const pt = {
  meta: {
    title: 'Breno Ramon | Desenvolvedor Fullstack',
    description:
      'Portfólio de Breno Ramon, desenvolvedor fullstack (.NET, Angular, React). Projetos, trajetória e contato.',
  },
  skip: 'Pular para o conteúdo',
  nav: {
    label: 'Navegação principal',
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    socials: 'Redes',
  },
  lang: {
    /** Rótulo lido por leitores de tela: descreve a ação, não o estado. */
    switchLabel: 'Switch to English',
    short: 'EN',
    langCode: 'en',
  },
  music: {
    label: 'Trilha sonora',
    play: 'Tocar trilha sonora',
    pause: 'Pausar trilha sonora',
    volume: 'Volume da trilha sonora',
  },
  hero: {
    eyebrow: 'Portfólio · Expedição 33',
    firstName: 'Breno',
    lastName: 'Ramon',
    role: 'Desenvolvedor fullstack',
    lead: 'Construo sistemas web de ponta a ponta, do banco de dados à interface. No TCC, fui além: um app que anuncia em voz alta os objetos ao redor de quem não enxerga.',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Falar comigo',
    stackLabel: 'Tecnologias principais',
    stack: ['.NET', 'Angular', 'React', 'Flutter'],
  },
  about: {
    title: 'Sobre mim',
    photoAlt: 'Retrato de Breno Ramon sorrindo, de camiseta preta e com o polegar levantado.',
    paragraphs: [
      'Sou formado em Ciência da Computação pela UNIT, em Aracaju (SE), e trabalho com desenvolvimento fullstack. Comecei como estagiário na SSP/SE, fui promovido a desenvolvedor full-stack e tenho experiência também na Indra/Minsait.',
      'No dia a dia uso C#/.NET, Entity Framework, AngularJS e SQL Server para manter e evoluir sistemas existentes. Fora do trabalho, exploro visão computacional e mobile: meu TCC, o VozGuia, tirou nota 10 na defesa.',
      'Estou em busca da próxima vaga como desenvolvedor fullstack, de preferência com .NET e Angular.',
    ],
  },
  journey: {
    title: 'Trajetória',
    education: 'Formação',
    experience: 'Experiência',
    items: {
      unit: {
        name: 'UNIT',
        detail: 'Ciência da Computação · Aracaju (SE)',
      },
      anhanguera: {
        name: 'Anhanguera',
        detail: 'Pós Graduação em Análise de Dados e Inteligência Artificial · Aracaju (SE)',
      },
      indra: {
        name: 'Indra/Minsait',
        detail: 'Na Indra sou Analista de Desenvolvimento com .NET e Angular para os projetos legados e para os projetos atuais .NET, React e Tailwind',
      },
      ssp: {
        name: 'SSP/SE',
        detail: 'De estagiário a desenvolvedor full-stack',
      },
    },
  },
  skills: {
    title: 'Hard skills',
    groups: {
      front: 'Front-end',
      back: 'Back-end e dados',
      mobile: 'Mobile e visão computacional',
      tools: 'Ferramentas',
    },
  },
  projects: {
    title: 'Projetos',
    intro: 'Três trabalhos, do app de acessibilidade ao site de RPG.',
    repo: 'Ver código de',
    demo: 'Abrir demonstração de',
    repoLabel: 'Código',
    demoLabel: 'Demonstração',
    items: {
      vozguia: {
        kicker: 'TCC · Nota 10 na defesa',
        title: 'VozGuia',
        description:
          'App Android que ajuda pessoas com deficiência visual a se orientar em ambientes fechados. Um modelo YOLOv8n treinado sob medida detecta 17 classes de objetos direto no celular, e o app anuncia em português, por ordem de prioridade, o que está por perto.',
        metricsLabel: 'Métricas do modelo',
        metrics: [
          { label: 'mAP50', value: '76,6%' },
          { label: 'Precisão', value: '82,1%' },
          { label: 'Recall', value: '71,7%' },
          { label: 'Classes', value: '17' },
          { label: 'Tamanho (TFLite)', value: '6,1 MB' },
        ],
        tags: ['Flutter', 'Python', 'YOLOv8', 'TensorFlow Lite'],
      },
      ssim: {
        kicker: 'Projeto acadêmico em grupo',
        title: 'Comparador de imagens (SSIM)',
        description:
          'Ferramenta web que calcula a similaridade estrutural (SSIM) entre duas imagens. Feita com Flask e OpenCV e publicada no Render.',
        tags: ['Python', 'Flask', 'OpenCV', 'Render'],
      },
      ordem: {
        kicker: 'Site · RPG de mesa',
        title: 'Ficha de Ordem Paranormal',
        description: 'Site de ficha de personagem para o RPG de mesa Ordem Paranormal.',
        tags: ['RPG de mesa', 'Ordem Paranormal'],
      },
    },
  },
  contact: {
    title: 'Contato',
    lead: 'Estou em busca da próxima vaga como desenvolvedor fullstack, de preferência com .NET e Angular. Se o meu perfil combina com o seu time, escreva.',
    email: 'Enviar e-mail',
    copyEmail: 'Copiar e-mail',
    copied: 'E-mail copiado',
    channels: 'Outros canais',
    external: '(abre em nova aba)',
  },
  footer: {
    built: 'Feito com React, Vite e Tailwind.',
    credit:
      'Projeto de fã inspirado em Clair Obscur: Expedition 33. Arte e trilha pertencem aos seus criadores.',
  },
}

export type Copy = typeof pt

const en: Copy = {
  meta: {
    title: 'Breno Ramon | Fullstack Developer',
    description:
      'Portfolio of Breno Ramon, fullstack developer (.NET, Angular, React). Projects, background and contact.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main navigation',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    socials: 'Social links',
  },
  lang: {
    switchLabel: 'Mudar para português',
    short: 'PT',
    langCode: 'pt-BR',
  },
  music: {
    label: 'Soundtrack',
    play: 'Play soundtrack',
    pause: 'Pause soundtrack',
    volume: 'Soundtrack volume',
  },
  hero: {
    eyebrow: 'Portfolio · Expedition 33',
    firstName: 'Breno',
    lastName: 'Ramon',
    role: 'Fullstack developer',
    lead: 'I build web systems end to end, from the database to the interface. For my thesis I went further: an app that announces nearby objects out loud to people who cannot see.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    stackLabel: 'Main technologies',
    stack: ['.NET', 'Angular', 'React', 'Flutter'],
  },
  about: {
    title: 'About me',
    photoAlt: 'Portrait of Breno Ramon smiling, wearing a black t-shirt and giving a thumbs up.',
    paragraphs: [
      'I hold a Computer Science degree from UNIT, in Aracaju (SE, Brazil), and work in fullstack development. I started as an intern at SSP/SE, was promoted to full-stack developer, and I also have experience at Indra/Minsait.',
      'Day to day I use C#/.NET, Entity Framework, AngularJS and SQL Server to maintain and evolve existing systems. Outside work I explore computer vision and mobile: my thesis project, VozGuia, earned a perfect 10 at its defense.',
      "I'm looking for my next role as a fullstack developer, preferably with .NET and Angular.",
    ],
  },
  journey: {
    title: 'Background',
    education: 'Education',
    experience: 'Experience',
    items: {
      unit: {
        name: 'UNIT',
        detail: 'Computer Science · Aracaju (Sergipe, Brazil)',
      },
      anhanguera: {
        name: 'Anhanguera',
        detail: 'Postgraduate Program in Data Analysis and Artificial Intelligence · Aracaju (Sergipe, Brazil)',
      },
      indra: {
        name: 'Indra/Minsait',
        detail: 'Analyst Developer with .NET and Angular for legacy projects and current .NET, React and Tailwind projects',
      },
      ssp: {
        name: 'SSP/SE',
        detail: 'From intern to full-stack developer',
      },
    },
  },
  skills: {
    title: 'Hard skills',
    groups: {
      front: 'Front-end',
      back: 'Back-end and data',
      mobile: 'Mobile and computer vision',
      tools: 'Tools',
    },
  },
  projects: {
    title: 'Projects',
    intro: 'Three works, from an accessibility app to a tabletop RPG site.',
    repo: 'View code for',
    demo: 'Open demo of',
    repoLabel: 'Code',
    demoLabel: 'Demo',
    items: {
      vozguia: {
        kicker: 'Thesis · Grade 10 at defense',
        title: 'VozGuia',
        description:
          'Android app that helps visually impaired people find their way indoors. A custom-trained YOLOv8n model detects 17 object classes right on the phone, and the app announces what is nearby in Portuguese, in priority order.',
        metricsLabel: 'Model metrics',
        metrics: [
          { label: 'mAP50', value: '76.6%' },
          { label: 'Precision', value: '82.1%' },
          { label: 'Recall', value: '71.7%' },
          { label: 'Classes', value: '17' },
          { label: 'Size (TFLite)', value: '6.1 MB' },
        ],
        tags: ['Flutter', 'Python', 'YOLOv8', 'TensorFlow Lite'],
      },
      ssim: {
        kicker: 'Group academic project',
        title: 'Image comparator (SSIM)',
        description:
          'Web tool that computes the structural similarity (SSIM) between two images. Built with Flask and OpenCV and deployed on Render.',
        tags: ['Python', 'Flask', 'OpenCV', 'Render'],
      },
      ordem: {
        kicker: 'Website · Tabletop RPG',
        title: 'Ordem Paranormal character sheet',
        description: 'Character sheet website for the Ordem Paranormal tabletop RPG.',
        tags: ['Tabletop RPG', 'Ordem Paranormal'],
      },
    },
  },
  contact: {
    title: 'Contact',
    lead: "I'm looking for my next role as a fullstack developer, preferably with .NET and Angular. If my profile fits your team, get in touch.",
    email: 'Send email',
    copyEmail: 'Copy email',
    copied: 'Email copied',
    channels: 'Other channels',
    external: '(opens in a new tab)',
  },
  footer: {
    built: 'Built with React, Vite and Tailwind.',
    credit:
      'Fan project inspired by Clair Obscur: Expedition 33. Art and soundtrack belong to their creators.',
  },
}

export const copy = { pt, en }
