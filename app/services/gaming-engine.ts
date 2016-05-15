import {Injectable} from "@angular/core"
import {Advancer} from "../model/advancer";
import {User} from "../model/user";

@Injectable()
export class GameEngineService{

    players = new Array();
    currentPlayerIndex:number=0;
    currentPlayer:User = this.players[this.currentPlayerIndex];
    message:string;
    cells = new Array();
    userIcons = ["fa-car", "fa-rocket", "fa-ship", "fa-fighter-jet", "fa-truck", "fa-heart", "fa-tree", "fa-send", "fa-futbol-o", "fa-headphones"];

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

    addPlayer(player:User) {
        player.displayImage = this.userIcons[this.players.length];
        this.players.push(player);
        this.currentPlayer = player
    }

    getSnakeAdvancers() {
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

    completeUserTurn(rolledValue:number) {
        this.message="";
        let nextCellIndex  = this.getNextCellIndex(rolledValue);
        let cell = this.cells[this.currentPlayer.currentCellIndex];
        var index = cell.userIcons.indexOf(this.currentPlayer.displayImage);    // <-- Not supported in <IE9
        if (index !== -1) {
            cell.userIcons.splice(index, 1);
        }
        this.currentPlayer.currentCellIndex = nextCellIndex;
        let nextCell = this.cells[nextCellIndex];
        this.currentPlayer = this.getNextPlayer(rolledValue);
        nextCell.userIcons.push(this.currentPlayer.displayImage);
    }

    getNextCellIndex(rolledValue: number) {
        let nextCellIndex  =this.currentPlayer.currentCellIndex + rolledValue;
        let advancer = this.advancersList.find(function (element) {
           return  element.initialCellIndex === nextCellIndex;
        });
        return advancer ? advancer.finalCellIndex : nextCellIndex;
    }

    getNextPlayer(rolledValue: number):User {
        let nextPlayer:User;
        if (rolledValue === 6) {
            nextPlayer = this.currentPlayer;
            this.message = "Congratulation "+this.currentPlayer.username+"! You got another turn..."
        } else {
            this.currentPlayerIndex = (this.players.length - 1 === this.currentPlayerIndex) ? 0 : (this.currentPlayerIndex +1);
            nextPlayer = this.players[this.currentPlayerIndex];
        }
        return nextPlayer;
    }

}