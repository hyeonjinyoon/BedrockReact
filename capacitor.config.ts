import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bedrock.bedrock',
  appName: 'Bedrock',
  webDir: 'dist',
  backgroundColor: '#d9d9d9',
  server: {
    url: 'https://bedrock.es',
    cleartext: true
  }
};

export default config;
