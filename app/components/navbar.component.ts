import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

@Component({
    selector: 'nav-bar',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a>Snake & Ladder</a> </li>
                    <li [ngClass]="{'active': (menu == 'home')}" (click)="menu = 'home'"><a [routerLink]="['/home']">Home</a></li>
                    <li [ngClass]="{'active': (menu == 'board')}" (click)="menu = 'board'"><a [routerLink]="['/board']">Board</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    `
})
export class NavBarComponent {
    menu = "home";
}