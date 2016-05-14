import {Component} from "@angular/core";
import {GameEngineService} from "../services/gaming-engine";
import {User} from "../model/user";


@Component({
    selector: 'home',
    templateUrl: '/templates/homeTemplate.html'
})

export class HomeComponent {
    
    playerName:string;
    
    addPlayer():void{
        let player = new User(this.playerName);
        this.gameEngineService.addPlayer(player);
        this.playerName = ""
    }

    constructor(public gameEngineService: GameEngineService){
        
    }
}