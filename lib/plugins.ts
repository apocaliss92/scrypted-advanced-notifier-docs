/**
 * Plugin slug -> NPM package and GitHub repo mapping.
 * NPM: @apocaliss92/scrypted-{name}
 * GitHub: apocaliss92/{repo}
 */
export const PLUGIN_CONFIG: Record<
  string,
  { npm: string; github: string }
> = {
  'advanced-notifier': {
    npm: '@apocaliss92/scrypted-advanced-notifier',
    github: 'apocaliss92/scrypted-advanced-notifier',
  },
  'frigate-bridge': {
    npm: '@apocaliss92/scrypted-frigate-bridge',
    github: 'apocaliss92/scrypted-frigate-bridge',
  },
  'reolink-native': {
    npm: '@apocaliss92/scrypted-reolink-native',
    github: 'apocaliss92/scrypted-reolink-native',
  },
  yamnet: {
    npm: '@apocaliss92/scrypted-yamnet',
    github: 'apocaliss92/scrypted-yamnet',
  },
  monitor: {
    npm: '@apocaliss92/scrypted-plugins-monitor',
    github: 'apocaliss92/scrypted-monitor',
  },
  'remote-backup': {
    npm: '@apocaliss92/scrypted-remote-backup',
    github: 'apocaliss92/scrypted-remote-backup',
  },
  syslog: {
    npm: '@apocaliss92/scrypted-syslog',
    github: 'apocaliss92/scrypted-syslog',
  },
  'active-streams-info': {
    npm: '@apocaliss92/scrypted-active-streams-info',
    github: 'apocaliss92/scrypted-active-streams-info',
  },
  zentik: {
    npm: '@apocaliss92/scrypted-zentik',
    github: 'apocaliss92/scrypted-zentik',
  },
  ntfy: {
    npm: '@apocaliss92/scrypted-ntfy',
    github: 'apocaliss92/scrypted-ntfy',
  },
};
