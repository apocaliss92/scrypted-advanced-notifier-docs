import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'apocaliss92 · Scrypted Plugins Docs',
    template: '%s | apocaliss92 · Scrypted Plugins',
  },
  description:
    'Documentation for Scrypted plugins by apocaliss92: Advanced Notifier, Frigate Bridge, Reolink Native and more',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
