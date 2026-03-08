import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { SiteFooter } from '@/components/site-footer';
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
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <RootProvider>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
