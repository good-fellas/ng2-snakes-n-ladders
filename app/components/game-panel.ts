import {Component} from "@angular/core";
import {UserInteractionPanel} from "./user-interaction-panel";
import {LadderAdvancerList} from "./ladder-advancer-list";
import {SnakeAdvancerList} from "./snake-advancers-list";
import {BoardComponent} from "./board.component";

@Component({
    selector: 'game-panel',
    directives: [BoardComponent, UserInteractionPanel, LadderAdvancerList, SnakeAdvancerList],
    template: `
 <div class="container">
        <div class="row"> 
            <div class="col-md-9" style="width: 736px; height: 736px;">
                <board></board>
            </div>
            
            <div class="col-md-3">
                <user-interaction-panel></user-interaction-panel>
            </div>
        </div>
 </div>
    `
})
export class GamePanel{

}