import {Component} from "@angular/core";
import {GameEngineService} from "../services/gaming-engine";
import {User} from "../model/user";
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/templates/homeTemplate.html',
    styles: [`
        a.disabled {
           pointer-events: none;
           cursor: not-allowed; 
        }
        .player-box {
            height: 290px;
        }
    `]
})

export class HomeComponent {
    
    playerName:string;
    
    addPlayer():void{
        if(this.playerName){
            let player = new User(this.playerName);
            this.gameEngineService.addPlayer(player);
            this.playerName = ""
        }
    }

    constructor(public gameEngineService: GameEngineService){
        
    }
}