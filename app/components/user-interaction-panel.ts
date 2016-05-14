import {Component} from '@angular/core'
import {GameEngineService} from "../services/gaming-engine";

@Component({
    selector: 'user-interaction-panel',
    template: `
        <div class="row">
            <div class="col-lg-12">
                <h4>Manish kapoor</h4>        
            </div>
            <div class="col-lg-12">
                <img src="../../assets/images/rolling-dice.png" />        
            </div>
            <div class="col-lg-12">
                <button (click)="getRandomNumber()">Roll</button>        
            </div>
            <div class="col-lg-12">
                {{randomNumber}}        
            </div>
            
            <div class="col-lg-12">
                
                Current Player : {{gameEngineService.currentPlayer.username}}        
            </div>
            
        </div>
    `
})

export class UserInteractionPanel{
    randomNumber:number;

    constructor(public gameEngineService:GameEngineService){
        this.randomNumber = 0;
    }

    getRandomNumber(){
        this.randomNumber = this.getRandomInt(1,7);
    }

    getRandomInt(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
