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
    nameExist:boolean;
    addPlayer():void{
        if(this.playerName && !this.nameAlreadyExist(this.playerName)) {
            let player = new User(this.playerName);
            this.gameEngineService.addPlayer(player);
            this.playerName = ""
        }
    }

    nameAlreadyExist(name:string):boolean {
        this.nameExist = this.gameEngineService.players.find(function (player) {
            return player.username === name
        }) ? true : false;
        return this.nameExist;
    }

    constructor(public gameEngineService: GameEngineService){
        
    }
}