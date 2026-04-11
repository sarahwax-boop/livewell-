// Root layout — intentional passthrough.
// The [locale]/layout.tsx owns <html>, <body>, fonts, CSS, and all providers.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
