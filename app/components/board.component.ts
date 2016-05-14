import {Component} from "@angular/core";
import {Cell} from "../model/cell"
import {CellComponent} from "./cell.component";

@Component({
    selector: 'board',
    directives: [CellComponent],
    template: `
     <div>
        <div cell-row class="row" *ngFor="let rowCell of cells; let i = index" curent-row-count="{{i}}"></div>       
     </div>
    `
})
export class BoardComponent {
    cells = new Array();
    constructor(){
        for (var i = 0; i < 10; i++) {
            this.cells[i] = i;
        }
    }
}