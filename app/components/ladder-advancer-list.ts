import {Component} from "@angular/core"
import {GameEngineService} from "../services/gaming-engine";

@Component({
    selector: "ladder-advancers-list",
    template: `
<div class="row">
   <div class="col-md-12"> 
    <table class="table table-bordered table-striped">
         <thead>
            <th colspan="2" class="text-center"> Ladder Advancers </th>
        </thead>
         <tbody>
             <tr *ngFor="#ladderAdvancer of gameEngineService.getLadderAdvancers()">
                    <td>{{ladderAdvancer.initialCellIndex}}</td>
                    <td>{{ladderAdvancer.finalCellIndex}}</td>
             </tr>
        </tbody>
    </table>
   </div>
  </div>
`
})

export class LadderAdvancerList{
    constructor(public gameEngineService: GameEngineService){

    }
}
