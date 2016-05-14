import {Component} from "@angular/core";
import {UserInteractionPanel} from "../components/user-interaction-panel"
import {LadderAdvancerList} from "../components/ladder-advancer-list";
import {SnakeAdvancerList} from "../components/snake-advancers-list";

@Component({
    selector: 'board',
    directives: [UserInteractionPanel, LadderAdvancerList, SnakeAdvancerList],
    template: `
 <div class="container">
        <div class="row"> 
            <div class="col-md-12 text-center"> <h1>Snake & Ladder</h1> </div>
        </div>
        
        <div class="row">
            <div class="col-md-1">
                <snake-advancers-list></snake-advancers-list>
            </div>
            <div class="col-md-1">
                <ladder-advancers-list></ladder-advancers-list>
            </div>
            
            <div class="col-md-7"></div>
            <div class="col-md-3">
                <user-interaction-panel></user-interaction-panel>
            </div>
        </div>
 </div>
    `
})
export class BoardComponent {

}