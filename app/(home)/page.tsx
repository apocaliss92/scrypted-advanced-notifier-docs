import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-6">
      <div className="flex justify-center mb-4">
        <Image
          src="/assets/icon.png"
          alt=""
          width={64}
          height={64}
          className="rounded-xl"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">
        apocaliss92 · Scrypted Plugins
      </h1>
      <p className="text-lg text-fd-muted-foreground mb-8 max-w-xl mx-auto">
        Documentation for Scrypted plugins developed by apocaliss92. Setup
        guides, configuration, and API reference.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-lg bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
      >
        Browse Documentation
      </Link>
    </div>
  );
}
