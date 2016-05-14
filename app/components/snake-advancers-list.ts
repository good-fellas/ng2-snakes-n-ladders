import {Component} from "@angular/core"
import {GameEngineService} from "../services/gaming-engine";

@Component({
    selector: "snake-advancers-list",
    template: `
  <div class="row">
   <div class="col-md-12"> 
    <table class="table table-bordered table-striped">
         <thead>
            <th colspan="2" class="text-center">Snake Advancers  </th>
        </thead>
         <tbody>
             <tr *ngFor="#snakeAdvancer of gameEngineService.getSnakeAdvancers()">
                    <td>{{snakeAdvancer.initialCellIndex}}</td>
                    <td>{{snakeAdvancer.finalCellIndex}}</td>
             </tr>
        </tbody>
    </table>
   </div>
  </div>
    `
})

export class SnakeAdvancerList {
    constructor(public gameEngineService:GameEngineService) {

    }
}
