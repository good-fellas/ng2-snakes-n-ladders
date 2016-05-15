import {Component} from '@angular/core'
import {GameEngineService} from "../services/gaming-engine";
import set = Reflect.set;

@Component({
    selector: 'user-interaction-panel',
    template: `
        <div class="row">
            <div class="col-lg-12 text-center margin-bottom-10">
                <h4>Player: {{gameEngineService.currentPlayer.username}}</h4>        
            </div>
            <div class="col-lg-12 text-center margin-bottom-10" style="height:70px">
                <img [hidden]="hideRollingDice"
                src="../../assets/images/rolling-dice.gif" />        
                
                <img [hidden]="hideDiceResult" height="65px" style="padding-left:5px;padding-top:5px"
                src="{{diceResultImagePath}}" />
                
            </div>
            <div class="col-lg-12 text-center">
                <button class="btn btn-success" (click)="rollButtonClickHandler()">Roll</button>        
                <!--<button (click)="getRandomNumber()">Roll</button>        -->
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
                this.setDiceResultImagePath(this.randomNumber)
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
