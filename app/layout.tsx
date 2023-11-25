import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        {/* Absolute address way can only use svg format pictures, or use network address ico format pictures, good pit, check for a long time */}
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <title>Nextjs development framework</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='A NextJs-based development framework that integrates eslint, code checking, commit-msg validation, and more.'
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
