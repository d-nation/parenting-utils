import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ParentingUtilsAppComponent, environment } from './app/';
import { appRouterProviders }   from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(ParentingUtilsAppComponent, [
    appRouterProviders    
  ]);

