import Link from 'next/link';

const FOOTER_LINKS = {
  support: [
    { href: 'https://buymeacoffee.com/apocaliss92', label: '☕ Buy me a coffee' },
  ],
  apps: {
    zentik: [
      { href: 'https://apps.apple.com/app/zentik-notifier/id6749312723', label: 'Zentik iOS' },
      { href: 'https://testflight.apple.com/join/dFqETQEm', label: 'Zentik TestFlight' },
      { href: 'https://notifier.zentik.app', label: 'Zentik PWA' },
    ],
    camstack: [
      { href: 'https://testflight.apple.com/join/CYnbJFqb', label: 'CamStack iOS' },
      { href: 'https://camstack.zentik.app', label: 'CamStack PWA' },
    ],
  },
  docs: [
    { href: 'https://advanced-notifier-docs.zentik.app', label: 'Advanced Notifier Docs' },
    { href: 'https://notifier-docs.zentik.app', label: 'Zentik Docs' },
  ],
  github: [
    { href: 'https://github.com/apocaliss92/scrypted-advanced-notifier', label: 'Advanced Notifier' },
  ],
};

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fd-border bg-fd-background">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-fd-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-fd-foreground">Zentik</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              {FOOTER_LINKS.apps.zentik.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-fd-foreground">CamStack</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              {FOOTER_LINKS.apps.camstack.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-fd-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              {FOOTER_LINKS.docs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.github.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
