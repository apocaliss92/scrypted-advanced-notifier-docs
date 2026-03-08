# Scrypted Plugins Documentation

Documentation hub for Scrypted plugins, built with [Fumadocs](https://fumadocs.dev) — Next.js, TypeScript, MDX.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Docs:** Fumadocs (MDX, search, auto-generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Docs are at `/docs`.

## Build

```bash
npm run build
npm run start
```

## Docker

Next.js server (API routes enabled for changelog, plugin info):

```bash
docker build -t scrypted-docs .
docker run -p 8080:8080 scrypted-docs
```

Open [http://localhost:8080](http://localhost:8080).

## Deployment (Railway)

Deploys via GitHub Actions on push to `main` or tags `v*.*.*`. Railway builds the Docker image and runs the Next.js server. API routes (`/api/plugin-info/*`) work out of the box.

**Setup:** Add secrets `RAILWAY_TOKEN` and `RAILWAY_SERVICE_ID` in GitHub. Railway sets `PORT` automatically.

## Documented Plugins

| Plugin | Description |
|--------|-------------|
| Advanced Notifier | MQTT, occupancy, timelapses, audio, PTZ |
| Frigate Bridge | Frigate detections, videoclips, object/audio |
| Reolink Native | Native Reolink for unsupported/battery cams |
| YAMNet | Audio classification (cry, bark, etc.) |
| Plugins Monitor | Diagnostics, restarts, updates |
| Remote Backup | Samba/SFTP backup |
| Syslog | Remote log forwarding |
| Active Streams Info | Active stream monitoring |
| Zentik | Push notifications |
| Ntfy | ntfy.sh push notifications |

## Adding a New Plugin

1. Create `content/docs/<plugin-name>/` folder
2. Add `index.mdx` and other pages
3. Update `content/docs/meta.json` to include the new plugin in the sidebar

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run types:check` | TypeScript + Fumadocs type check |

## License

MIT
