# nextjs-development-framework

1. npx create-next-app@latest
  TypeScript Yes\
  ESLint Yes\
  Tailwind CSS Yes\
  src Yes\
  App Router Yes\
  customize import alias (@/*) Yes
2. pnpm install
3. pnpm dev

**Notice:**\
If you get an error like this:\
app-index.js:32 Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed at body at html at RedirectErrorBoundary

this is because of some extensions like "Grammarly" or "AdBlock" that inject some extra attributes to the html tag.
