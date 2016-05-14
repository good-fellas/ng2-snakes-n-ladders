import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

@Component({
    selector: 'nav-bar',
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id,
    templateUrl: 'navbar.html'
})
export class NavBarComponent {
    menu = "home";
}