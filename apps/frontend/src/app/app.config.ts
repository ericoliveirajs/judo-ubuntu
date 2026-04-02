import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
// Importação corrigida aqui:
import { provideRouter, withInMemoryScrolling } from '@angular/router'; 
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      appRoutes,
      // Aqui as duas configurações que a gente queria agora vivem juntas:
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled' 
      })
    ),
  ],
};