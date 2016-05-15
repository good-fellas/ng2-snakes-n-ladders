import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {GameEngineService} from "../services/gaming-engine";

@Component({
    selector: 'nav-bar',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-default navbar-fixed-top" [ngClass]="{'navbar-shrink': (getManu() == 'board')}">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header page-scroll">
                        <a class="navbar-brand page-scroll" href="#page-top">Snakes and Ladders</a>
                    </div>
        
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a [routerLink]="['/board']"
                                 *ngIf="gameEngineService.isGameInProgress && !isNotOnBoard()" 
                                 (click)="setMenu('board')">
                                 Resume Game </a>
                            </li>
                            <li [ngClass]="{'active': (getManu() == 'home')}" (click)="setMenu('home')">
                                <a class="page-scroll" [routerLink]="['/home']">Home</a>
                            </li>
                            <li [ngClass]="{'active': (getManu() == 'rules')}" (click)="setMenu('rules')">
                                <a class="page-scroll" [routerLink]="['/rules']">Rules</a>
                            </li>
                            <li [ngClass]="{'active': (getManu() == 'about')}" (click)="setMenu('about')">
                                <a class="page-scroll" [routerLink]="['/about']">Team</a>
                            </li>
                            <li [ngClass]="{'active': (getManu() == 'credit')}" (click)="setMenu('credit')">
                                <a class="page-scroll" [routerLink]="['/credit']">Credits</a>
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
    
    getManu():string{
        console.log("getter ",this.gameEngineService.currentMenu);
        return this.gameEngineService.currentMenu;
    }
    
    setMenu(menu:string):void{
        console.log("setter ",this.gameEngineService.currentMenu);
        this.gameEngineService.currentMenu = menu;
    }
    
    isNotOnBoard():boolean{
        return this.gameEngineService.currentMenu == "board";
    }
    

    constructor(public gameEngineService: GameEngineService){
        
    }
}