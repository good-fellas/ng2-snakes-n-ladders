import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import {GameEngineService} from "./services/gaming-engine";
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    GameEngineService,
    MODAL_BROWSER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue : '/' })
]);