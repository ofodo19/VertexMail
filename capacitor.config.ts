import type { CapacitorConfig } from '@capacitor/cli';

// ─────────────────────────────────────────────────────────────
//  EDIT THIS ONE LINE: put your deployed Vercel address here.
//  Example: 'https://vertex-mail.vercel.app'
//  It must start with https:// and have NO slash at the end.
// ─────────────────────────────────────────────────────────────
const APP_URL = 'https://vertex-mail.vercel.app';

const config: CapacitorConfig = {
  appId: 'com.vertextech.mail',   // unique app id (like a fingerprint)
  appName: 'Vertex Mail',         // name shown under the app icon
  webDir: 'www',                  // tiny offline fallback page (required by Capacitor)
  server: {
    url: APP_URL + '/inbox',      // the app opens your live website (asks you to log in if needed)
    cleartext: false,             // https only
    errorPath: 'offline.html',    // shown (from inside the app) when the site can't be reached
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#FFFFFF',
      showSpinner: false,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    StatusBar: {
      style: 'DEFAULT',
      backgroundColor: '#FFFFFF',
    },
  },
};

export default config;
