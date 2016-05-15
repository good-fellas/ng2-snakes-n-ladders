import {Injectable} from "@angular/core"
import {Advancer} from "../model/advancer";
import {User} from "../model/user";

@Injectable()
export class GameEngineService{

    players = new Array();//[new User('Test User')];
    currentPlayer = this.players[0];

    addPlayer(player:User){
        this.players.push(player);
        this.currentPlayer = player
    }

    advancersList = [
        new Advancer("snake", 18, 5),
        new Advancer("snake", 49, 33),
        new Advancer("snake", 43, 23),
        new Advancer("snake", 56, 26),
        new Advancer("snake", 56, 26),
        new Advancer("snake", 65, 44),
        new Advancer("snake", 88, 53),
        new Advancer("snake", 92, 71),
        new Advancer("snake", 99, 35),
        new Advancer("ladder",6, 16),
        new Advancer("ladder",9, 31),
        new Advancer("ladder",19, 38),
        new Advancer("ladder",21, 79),
        new Advancer("ladder",28, 84),
        new Advancer("ladder",52, 67),
        new Advancer("ladder",72, 93),
        new Advancer("ladder",80, 100)
    ];

    getSnakeAdvancers(){
        return this.advancersList.filter(this.isSnakeAdvancer)
    }

    getLadderAdvancers(){
        return this.advancersList.filter(this.isLadderAdvancer)
    }

    isSnakeAdvancer = (advancer: Advancer):boolean  => {
        return advancer.type == "snake"
    }

    isLadderAdvancer = (advancer: Advancer):boolean  => {
        return advancer.type == "ladder"
    }

}