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

**Notice:**
1. If you get an error like this:\
app-index.js:32 Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed at body at html at RedirectErrorBoundary.\
this is because of some extensions like "Grammarly" or "AdBlock" that inject some extra attributes to the html tag.
2. After the hook command is configured using the simple-git-hooks command, you need to run `npx simple-git-hooks` for it to take effect.\
If you want to test whether the git hook configuration will execute through echo xxx, note that you need to execute the command in the console to trigger the relevant hook, otherwise the output will not print in the console.