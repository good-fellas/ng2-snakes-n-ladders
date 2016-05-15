import {Component, ViewContainerRef} from "@angular/core";
import {UserInteractionPanel} from "./user-interaction-panel";
import {LadderAdvancerList} from "./ladder-advancer-list";
import {SnakeAdvancerList} from "./snake-advancers-list";
import {BoardComponent} from "./board.component";
import {WinnerModal} from "./winning-modal.component";
import { Modal,BS_MODAL_PROVIDERS} from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'game-panel',
    viewProviders: [ ...BS_MODAL_PROVIDERS ],
    directives: [BoardComponent, UserInteractionPanel, LadderAdvancerList, SnakeAdvancerList, WinnerModal],
    template: `
 <div class="container"  style="padding-top:80px">
    <div class="intro-text">
        <div class="row"> 
            <div class="col-md-8" style="width: 580px; height: 580px;">
                <board></board>
            </div>
            <div class="col-md-4">
                <user-interaction-panel></user-interaction-panel>
            </div>
            <button (click)="openAlert()">open Alert</button>
        </div>
    </div>
 </div>
    `
})
export class GamePanel{
    constructor(public modal: Modal, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
    openAlert() {
        return this.modal.open(WinnerModal);
    }

}