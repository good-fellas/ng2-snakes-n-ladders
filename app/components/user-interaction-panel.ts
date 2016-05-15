import {Component} from '@angular/core'
import {GameEngineService} from "../services/gaming-engine";
import set = Reflect.set;

@Component({
    selector: 'user-interaction-panel',
    template: `
        <div class="row">
            <div class="col-lg-12">
                <h4>{{gameEngineService.currentPlayer.username}}'s turn</h4>        
            </div>
            <div class="col-lg-12">
                #{{hideRollingDice}}#
                <img [hidden]="hideRollingDice"
                src="../../assets/images/rolling-dice.gif" />        
                
                <img [hidden]="hideDiceResult" height="50px"
                src="{{diceResultImagePath}}" />
                
            </div>
            <div class="col-lg-12">
                <button (click)="rollButtonClickHandler()">Roll</button>        
                <!--<button (click)="getRandomNumber()">Roll</button>        -->
            </div>
            <div class="col-lg-12">
                {{randomNumber}}        
            </div>
            <div class="col-lg-12">
                <span *ngIf="gameEngineService.message" class="well">{{gameEngineService.message}}</span>
            </div>
            
        </div>
    `
})

export class UserInteractionPanel{
    randomNumber:number;
    hideRollingDice:boolean;
    hideDiceResult:boolean;
    diceResultImagePath:string;

    constructor(public gameEngineService:GameEngineService){
        this.randomNumber = 0;
        this.hideRollingDice = true;
        this.hideDiceResult = true;
        this.diceResultImagePath = '';
    }

    rollButtonClickHandler()
    {
        this.hideRollingDice = false;
        this.hideDiceResult = true;
        setTimeout(() => {
            this.setRandomNumber();
            this.hideRollingDice = true;
            this.hideDiceResult = false;
            this.setDiceResultImagePath(this.randomNumber);
            this.gameEngineService.completeUserTurn(this.randomNumber);
        },
        1000)
    }

    setRandomNumber(){
        this.randomNumber = this.getRandomInt(1,7);
    }

    getRandomInt(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    setDiceResultImagePath(diceResult:number){
        let parentDirectoryPath:string;
        let fileExtension:string;
        parentDirectoryPath="../../assets/images/";
        fileExtension=".png";
        this.diceResultImagePath = parentDirectoryPath+diceResult+fileExtension;
        console.log("image path: ", this.diceResultImagePath);
    }
}
