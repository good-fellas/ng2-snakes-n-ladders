import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

@Component({
    selector: 'nav-bar',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header page-scroll">
                        <a class="navbar-brand page-scroll" href="#page-top">Snake and Ladder</a>
                    </div>
        
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li [ngClass]="{'active': (menu == 'home')}" (click)="menu = 'home'">
                                <a class="page-scroll" [routerLink]="['/home']">Home</a>
                            </li>
                            <li (click)="menu = 'rules'">
                                <a class="page-scroll" [routerLink]="['/rules']">Rules</a>
                            </li>
                            <li (click)="menu = 'about'">
                                <a class="page-scroll" [routerLink]="['/about']">Team</a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
            </nav>

    `
})
export class NavBarComponent {
    menu = "home";
}