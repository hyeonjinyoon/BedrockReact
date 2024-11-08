import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bedrock.bedrock',
  appName: 'Bedrock',
  webDir: 'dist',
  server: {
    url: 'https://bedrock.es',
    cleartext: true
  }
};

export default config;
