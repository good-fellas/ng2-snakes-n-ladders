import {Component} from "@angular/core";
import {Cell} from "../model/cell"

@Component({
    selector: 'board',
    directives: [],
    template: `
     <div>
        <div *ngFor="let cell of cells; let i = index">
            
         #{{cell.position}}
        </div>       
     </div>
    `
})
export class BoardComponent {

    cells = new Array();

    constructor(){
        for (var index = 0; index < 100; index++) {
            this.cells.push(new Cell(100 - index));
        }
    }
}