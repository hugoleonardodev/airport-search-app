This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# and
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Recommendations

## ES Lint and Prettier plugins are recommended on VS Code in order to force code styles and patterns

### Some settings are also recommended on `settings.json` and you may open it with the command palette `CTRL + SHIFT + P`

```json
{
  "auto-close-tag.activationOnLanguage": ["*"], // removes warning about @apply and tailwind decorators
  "editor.autoClosingBrackets": "always",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    // "source.fixAll.prettier": false // pode ser preciso explicitar isso, mas no meu tá comentado
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.suggestSelection": "first",
  "editor.tabCompletion": "on",
  "editor.tabSize": 2,
  "editor.inlineSuggest.enabled": true,
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "ejs": "html"
  },
  "eslint.useESLintClass": true,
  "eslint.workingDirectories": ["./"],
  "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

### VS Code Extensions

- Necessary for linter and format code:

ES Lint and Prettier, lattest version

- Recommendations:

Auto Close Tag, Auto Rename Tag, CodeMetrics, Color Highlight, DotEnv, Dracula Official, EditorConfig, ESLint, Git History,
GitHub Copilot, GitLens, Import Cost, IntelliCode, IntelliSense for CSS class names in HTML, Live Server, Live Share, MDX,
Path Intellisense, Prettier, Rainbow Brackets, Tailwind CSS Intellisense, VS Code Counter, vscode-styled-components, Zoom Bar

### Atomic Design and custom components library

[Atomic Design](https://atomicdesign.bradfrost.com/) is a design system that helps you build beautiful, usable, and accessible web apps.

[Article PT-BR](https://medium.com/rd-shipit/como-criar-componentes-react-com-uma-arquitetura-escal%C3%A1vel-usando-atomic-design-74a67aaf47e0) how to create react components with scalable architecture using atomic design.

[GitHub Repo](https://github.com/danilowoz/react-atomic-design)

[Forwarding Refs PT-BR](https://pt-br.reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components)

[Code Splitting PT-BR](https://pt-br.reactjs.org/docs/code-splitting.html)

[When to use memo PT-BR](https://pt-br.reactjs.org/docs/react-api.html#reactmemo)

### Final thoughts

This boilerplate is following the Material UI recommendations. [MUI NextJS with Typescript](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript)
It is taking some time to get the first load. Probably because of the cache and getInitialProps configurations from MUI.
Personally, I would create this application with Webpack and Babel. Because it is faster. And NextJS has a lot of production features that must be considered.
There is a lot of work to do to make this application production ready. Like manual tests, end to end tests, improve the performance, features, and so on.
I believe that this prototype or MVP is meeting the requirements of the project.

Thanks for the opportunity to share this project with you. I would love to share my thoughts on a meeting.

### Contacts

[LinkedIn](https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/)
[GitHub](https://github.com/hugoleonardodev)

```bash
hugoleonardo.dev@gmail.com
```

```bash
+5531999699361
```
