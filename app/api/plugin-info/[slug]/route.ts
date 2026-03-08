import { NextResponse } from 'next/server';
import { PLUGIN_CONFIG } from '@/lib/plugins';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // 1 hour

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const config = PLUGIN_CONFIG[slug];
  if (!config) {
    return NextResponse.json({ error: 'Plugin not found' }, { status: 404 });
  }

  try {
    const [npmRes, changelogRes] = await Promise.allSettled([
      fetch(`https://registry.npmjs.org/${encodeURIComponent(config.npm)}`),
      fetch(
        `https://raw.githubusercontent.com/${config.github}/main/CHANGELOG.md`
      ),
    ]);

    let version: string | null = null;
    if (npmRes.status === 'fulfilled' && npmRes.value.ok) {
      const data = await npmRes.value.json();
      version = data['dist-tags']?.latest ?? data.version ?? null;
    }

    let changelog: string | null = null;
    if (changelogRes.status === 'fulfilled' && changelogRes.value.ok) {
      changelog = await changelogRes.value.text();
      // Keep first ~8KB to avoid huge payloads; typically covers several releases
      if (changelog.length > 8000) {
        changelog = changelog.slice(0, 8000) + '\n\n... (truncated)';
      }
    }

    return NextResponse.json({ version, changelog });
  } catch (e) {
    console.error('Plugin info fetch error:', e);
    return NextResponse.json(
      { error: 'Failed to fetch plugin info' },
      { status: 500 }
    );
  }
}
