import {Component} from "@angular/core";
import {UserInteractionPanel} from "../user-interaction-panel/user-interaction-panel"

@Component({
    selector: 'board',
    directives: [UserInteractionPanel],
    template: `
    <div class="row">
        <div class="col-lg-9">
            <h4>This is board page</h4>
        </div>
        <user-interaction-panel></user-interaction-panel>
     </div>
    `
})
export class BoardComponent {

}