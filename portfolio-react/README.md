# Portfólio · Breno Ramon (Expedition 33)

Recriação do portfólio inspirado em *Clair Obscur: Expedition 33*, agora em **React + Vite + TypeScript + Tailwind CSS v4**.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist/ (checa os tipos antes)
npm run preview  # serve o build localmente
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Todos os textos (PT e EN) | `src/i18n/copy.ts` |
| Links dos projetos (`repo`, `demo`) e capturas de tela (`image`) | `src/data/projects.ts` |
| E-mail e redes sociais | `src/data/site.ts` |
| Skills e ícones | `src/data/skills.ts` |
| Cores, fontes e espaçamento (tokens) | `src/index.css`, bloco `@theme` |
| Imagens | `src/assets/` |
| Trilha sonora | `public/audio/musicExpedition33.mp3` |

## Estrutura

```
src/
  components/   Header, Hero, About, Journey, Skills, Projects, ProjectCard, Contact, Footer, ...
  data/         dados que não dependem do idioma
  hooks/        useMusic, useScrollSpy
  i18n/         copy.ts (textos), LanguageProvider, context
  index.css     tokens de design + estilos compartilhados
```

## Decisões de design

- **Assinatura:** no hero, a arte fica na sombra e uma "lanterna" de luz segue o mouse (clair-obscur). Em telas de toque a luz fica fixa; com "reduzir movimento" ativo, ela acompanha o cursor sem suavização.
- **Tipografia:** Bodoni Moda (títulos), Newsreader (texto), Google Sans Code (rótulos e código), todas auto-hospedadas via Fontsource.
- **Acessibilidade:** navegação por teclado, link "pular para o conteúdo", foco visível, `prefers-reduced-motion`, contraste ≥ 4,5:1 e alvos de toque ≥ 44 px.
- **Áudio:** nunca toca sozinho e o arquivo (14 MB) só é baixado quando a pessoa aperta o botão.

## Deploy (Vercel)

Importe o repositório na Vercel: o preset "Vite" já detecta `npm run build` e a pasta `dist`.

## Créditos

Projeto de fã, sem fins comerciais. A arte e a trilha sonora de *Clair Obscur: Expedition 33* pertencem à Sandfall Interactive e a seus criadores. Antes de publicar, confirme se você tem direito de usá-las.
