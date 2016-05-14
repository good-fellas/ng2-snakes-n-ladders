import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {GameEngineService} from "./services/gaming-engine";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    GameEngineService,
    provide(APP_BASE_HREF, {useValue : '/' })
]);