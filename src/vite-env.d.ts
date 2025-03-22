/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BEEHIIV_PUBLICATION_ID: string;
  readonly VITE_BEEHIIV_FORM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
} 