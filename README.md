# Portfólio · Breno Ramon — tema Clair Obscur: Expedition 33

Meu portfólio pessoal, Analista Desenvolvedor, com direção de arte inspirada em *Clair Obscur: Expedition 33* (Sandfall Interactive): noite, luz de lampião e tipografia de época. Construído em **React 19 + Vite + TypeScript + Tailwind CSS v4**, bilíngue (PT-BR/EN) e acessível (WCAG 2.1 AA).

## Como rodar

```bash
cd portfolio-react
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # checa os tipos e gera a pasta dist/
npm run preview  # serve o build de produção localmente
npm run lint      # oxlint
```

Sempre que `portfolio-react/package.json` mudar (uma dependência nova, por exemplo), rodar `npm install` de novo antes do próximo `dev`/`build`.

## Organização das pastas

```
Expedition33/
├── README.md                    este arquivo
└── portfolio-react/             o projeto — único código-fonte que interessa
    ├── index.html                 ponto de entrada do Vite
    ├── package.json                dependências e scripts (dev/build/preview/lint)
    ├── vite.config.ts               plugin do React + plugin do Tailwind v4
    ├── tsconfig*.json                configuração do TypeScript
    ├── public/
    │   ├── favicon.svg
    │   └── audio/musicExpedition33.mp3   trilha, só baixada quando a pessoa aperta "play"
    └── src/
        ├── main.tsx                bootstrap do React + imports das fontes (@fontsource)
        ├── index.css                 tokens de design (bloco @theme) + estilos compartilhados
        ├── App.tsx                    monta a página juntando os componentes, na ordem das seções
        ├── assets/                     imagens já otimizadas em WebP (fonte, foto de perfil)
        ├── components/                 um componente por seção/bloco de UI (ver tabela abaixo)
        ├── data/                        conteúdo que NÃO muda com o idioma (links, projetos, skills)
        ├── i18n/                        todo o texto da página (PT/EN) + o Context/Provider de idioma
        └── hooks/                       useMusic (player de áudio), useScrollSpy (nav ativa)
```

### Componentes (`src/components/`)

| Arquivo | Seção / responsabilidade |
| --- | --- |
| `Header.tsx` | Barra fixa: logo, navegação, redes sociais, player de música, alternância de idioma, menu mobile |
| `Hero.tsx` | Abertura: nome, cargo, CTAs — com o efeito de "lanterna" que segue o mouse sobre a arte de fundo |
| `About.tsx` | Foto + texto de apresentação |
| `Journey.tsx` | Linha do tempo de formação/experiência (UNIT, Anhanguera, Indra/Minsait, SSP/SE) |
| `Skills.tsx` | Hard skills agrupadas (front-end, back-end e dados, mobile/visão computacional, ferramentas) |
| `Projects.tsx` | Grade de projetos + CTA final para o GitHub |
| `ProjectCard.tsx` | Card individual (layout de destaque para o projeto principal, com métricas; layout simples para os demais) |
| `Contact.tsx` | E-mail (com botão de copiar) e links para redes sociais |
| `Footer.tsx` | Créditos e aviso de projeto de fã |
| `Reveal.tsx` | Wrapper genérico de animação ao rolar a página (IntersectionObserver) |
| `SectionHeading.tsx`, `SocialIcon.tsx`, `LanguageToggle.tsx`, `MusicControls.tsx` | Peças menores reutilizadas pelas seções acima |

### Onde editar cada coisa

| O quê | Arquivo |
| --- | --- |
| Textos em PT e EN (títulos, descrições, rótulos) | `src/i18n/copy.ts` |
| Links dos projetos (`repo`, `demo`) e imagem de capa | `src/data/projects.ts` |
| E-mail e redes sociais | `src/data/site.ts` |
| Lista de skills e seus ícones | `src/data/skills.ts` |
| Cores, fontes e espaçamento (design tokens) | `src/index.css`, bloco `@theme` |
| Imagens (foto, arte de fundo) | `src/assets/` |
| Trilha sonora | `public/audio/musicExpedition33.mp3` |

## Os três projetos em destaque

Definidos em `src/data/projects.ts` (links e ícone) + `src/i18n/copy.ts` (título/descrição/métricas em cada idioma):

1. **VozGuia** — projeto em destaque (TCC, nota 10 na defesa). App Android de acessibilidade: um modelo YOLOv8n treinado sob medida detecta 17 classes de objetos pela câmera e anuncia em português, por prioridade, o que está por perto de uma pessoa com deficiência visual. Stack: Flutter, Python, YOLOv8, TensorFlow Lite. Métricas do modelo (mAP50, precisão, recall etc.) aparecem no card.
   Repositório: `github.com/breeramon/TCC_VisaoComputacional`
2. **Comparador de imagens (SSIM)** — ferramenta web acadêmica que calcula a similaridade estrutural entre duas imagens. Flask + OpenCV, publicada no Render.
   Repositório: `github.com/breeramon/Processamento_de_Imagens_E02_Grupo6`
3. **Ficha de Ordem Paranormal** — site de ficha de personagem para o RPG de mesa Ordem Paranormal. React + Vite + Tailwind.
   Demo: `breusrpg.vercel.app` · Repositório: `github.com/breeramon/DadosRPG`

## Decisões de design

- **Assinatura visual:** no hero, a arte fica na sombra e uma "lanterna" de luz segue o cursor do mouse (clair-obscur). Em telas de toque a luz fica fixa; com "reduzir movimento" ativo no sistema, ela acompanha o cursor sem suavização de animação.
- **Tipografia:** o mesmo mapeamento por papel usado no próprio jogo, com as famílias gratuitas equivalentes (auto-hospedadas via Fontsource, sem depender de CDN externo): **Cinzel** nos títulos e na logo, **IM Fell Double Pica** no corpo do texto, **Bebas Neue** nos rótulos, botões e números (métricas dos projetos) e **EB Garamond** itálico só no subtítulo do hero, no papel de "voz"/diálogo — o mesmo uso que tem nas cutscenes do jogo. (A fonte paga oficial dos títulos é a Trajan; Cinzel é a alternativa gratuita mais próxima.)
- **Idioma:** PT-BR por padrão, com alternância para EN persistida no navegador (`localStorage`) e sincronizada com o `<html lang>` e o título da aba.
- **Acessibilidade:** navegação por teclado, link "pular para o conteúdo", foco visível, `prefers-reduced-motion` respeitado em todas as animações, contraste de texto ≥ 4,5:1 (auditado) e alvos de toque ≥ 44 px.
- **Áudio:** a trilha nunca toca sozinha e o arquivo (14 MB) só é baixado quando a pessoa aperta o botão de play.

## Deploy (Vercel)

Importe a pasta `portfolio-react` como o repositório/raiz do projeto na Vercel — o preset "Vite" detecta `npm run build` e a pasta `dist` automaticamente.

## Créditos

Projeto de fã, sem fins comerciais. A arte e a trilha sonora de *Clair Obscur: Expedition 33* pertencem à Sandfall Interactive e a seus criadores. Antes de publicar publicamente, confirme se você tem direito de usá-las.

## Histórico

O portfólio começou como HTML, CSS e JavaScript puro. Ele foi totalmente reconstruído em React + Vite + TypeScript + Tailwind, mantendo o mesmo escopo (navegação com player de música, hero, sobre, projetos, contato) e adicionando o que a versão original não tinha: suporte a dois idiomas, seção de contato funcional, menu mobile e acessibilidade revisada.
