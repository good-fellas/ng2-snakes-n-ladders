import {Injectable} from "@angular/core"
import {Advancer} from "../model/advancer";
import {User} from "../model/user";

@Injectable()
export class GameEngineService{
    
    players = new Array();
    completedPlayers = new Array();
    currentPlayerIndex:number=0;
    currentPlayer:User = this.players[this.currentPlayerIndex];
    messages = new Array();
    cells = new Array();
    userIcons = ["fa-car", "fa-rocket", "fa-ship", "fa-fighter-jet", "fa-truck", "fa-heart", "fa-tree", "fa-send", "fa-futbol-o", "fa-headphones"];

    rank = {1: "Winner", 2: "First Runner-up", 3: "Second Runner-up"};

    advancersList = [
        new Advancer("snake", 99,80),
        new Advancer("snake", 95, 75),
        new Advancer("snake", 92, 88),
        new Advancer("snake", 89, 68),
        new Advancer("snake", 74, 53),
        new Advancer("snake", 64, 60),
        new Advancer("snake", 62, 19),
        new Advancer("snake", 49, 11),
        new Advancer("snake", 46, 25),
        new Advancer("snake", 16, 6),
        new Advancer("ladder",2, 38),
        new Advancer("ladder",7, 14),
        new Advancer("ladder",8, 31),
        new Advancer("ladder",15, 26),
        new Advancer("ladder",21, 42),
        new Advancer("ladder",28, 84),
        new Advancer("ladder",36, 44),
        new Advancer("ladder",51, 67),
        new Advancer("ladder",71, 91),
        new Advancer("ladder",78, 98),
        new Advancer("ladder",87, 94)
    ];

    advancerMsg = {'ladder': 'Hurray!! you found ladder.', 'snake': 'oops!!! you stepped on snake.'};

    addPlayer(player:User) {
        player.displayImage = this.userIcons[this.players.length];
        this.players.push(player);
        this.currentPlayer = player;
        this.currentPlayerIndex = this.players.length - 1;
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
        let nextCellIndex  = this.getNextCellIndex(rolledValue);
        this.updateCellState(nextCellIndex);
        this.updateCurrentUserState(nextCellIndex);
        this.currentPlayer = this.getNextPlayer(rolledValue);
    }

    updateCurrentUserState(nextCellIndex:number) {
        this.currentPlayer.currentCellIndex = nextCellIndex;
        if (nextCellIndex === 100) {
            this.players = this.players.filter((player:User) => {
                return player.username !== this.currentPlayer.username;
            });
            this.currentPlayer.rank = this.completedPlayers.length + 1;
            this.completedPlayers.push(this.currentPlayer);
            this.currentPlayer = this.players[0];
            this.currentPlayerIndex = 0;
        }
    }

    updateCellState(nextCellIndex:number) {
        let cell = this.cells[this.currentPlayer.currentCellIndex];
        if(cell) {
            var index = cell.userIcons.indexOf(this.currentPlayer.displayImage);    // <-- Not supported in <IE9
            if (index !== -1) {
                cell.userIcons.splice(index, 1);
            }
        }
        let nextCell = this.cells[nextCellIndex];
        nextCell.userIcons.push(this.currentPlayer.displayImage);
    }

    getNextCellIndex(rolledValue: number) {
        let nextCellIndex  = this.currentPlayer.currentCellIndex + rolledValue;
        if(nextCellIndex > 100) {
            this.addMessageLog(this.currentPlayer, this.currentPlayer.username +" cannot move " +rolledValue+ " step(s). Max. allowed step: " + (100 - this.currentPlayer.currentCellIndex));
            nextCellIndex  = this.currentPlayer.currentCellIndex;
        }
        let advancer = this.advancersList.find(function (element) {
           return  element.initialCellIndex === nextCellIndex;
        });
        var advMsg = '';
        if(advancer) {
            nextCellIndex = advancer.finalCellIndex;
            advMsg = this.advancerMsg[advancer.type];
        }
        this.addMessageLog(this.currentPlayer, advMsg + this.currentPlayer.username + ' moved to '+ nextCellIndex + '.');
        return nextCellIndex;
    }

    getNextPlayer(rolledValue: number):User {
        let nextPlayer:User;
        if (rolledValue === 6) {
            nextPlayer = this.currentPlayer;
            this.addMessageLog(this.currentPlayer, "Congratulation "+this.currentPlayer.username+"! You got another turn...");
        } else {
            this.currentPlayerIndex = (this.players.length - 1 === this.currentPlayerIndex) ? 0 : (this.currentPlayerIndex +1);
            nextPlayer = this.players[this.currentPlayerIndex];
        }
        return nextPlayer;
    }

    addMessageLog(user:User, message:string) {
        console.log(this.messages);
        this.messages.unshift({
            'userIcon': user.displayImage,
            'text': message
        });
    }

    resetGame() {
        this.players = new Array();
        this.completedPlayers = new Array();
        this.currentPlayerIndex=0;
        this.currentPlayer = null;
        this.messages = new Array();
    }

}