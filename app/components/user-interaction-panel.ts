import {Component} from '@angular/core'
import {GameEngineService} from "../services/gaming-engine";
import set = Reflect.set;

@Component({
    selector: 'user-interaction-panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <span class="fa {{gameEngineService.currentPlayer.displayImage}}"></span> <strong>{{gameEngineService.currentPlayer.username}}'s</strong> Turn
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-12" style="height:70px">
                        <img [hidden]="hideRollingDice"
                            src="../../assets/images/rolling-dice.gif" />        
                
                        <img [hidden]="hideDiceResult" height="50px" style="padding-left:5px;padding-top:5px"
                            src="{{diceResultImagePath}}" />
                    </div>
                    <div class="col-lg-12">
                        <button class="btn btn-success" (click)="rollButtonClickHandler()">Roll</button>        
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="panel panel-default">
            <div class="panel-heading">
                <strong>Recent Activities</strong>
            </div>
            <div class="panel-body">
                <table class="table table-hover">
                    <tbody>
                        <tr *ngFor="let info of gameEngineService.messages">
                            <td><i class="fa {{info.userIcon}}"></i> {{info.text}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `,
    styles: [`
        .log {
            border-bottom: 1px dashed #ccc;
        }
                table {
            width: 100%;
        }

        thead, tbody, tr, td, th { display: block; }

        tr:after {
            content: ' ';
            display: block;
            visibility: hidden;
            clear: both;
        }

        thead th {
            height: 30px;

            /*text-align: left;*/
        }

        tbody {
            height: 260px;
            overflow-y: auto;
        }

        thead {
            /* fallback */
        }


        tbody td, thead th {
            width: 100%;
            float: left;
        }
    `]
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
