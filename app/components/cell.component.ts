import {Component, Input} from "@angular/core";
import {Cell} from "../model/cell"

@Component({
    selector: '[cell-row]',
    directives: [],
    template: `
        <div class="col-lg-1 cell" *ngFor="let cell of cells; let ij = index" >
            {{cell.position}}
        </div>
    `,
    styles: [`
        .cell { 
            border: 1px solid black;
            margin: 1px 1px;
            height: 50px;
            width: 60px;
         }
    `]
})
export class CellComponent {
    cells = new Array();
    @Input('curent-row-count') curentRowCount: number;

    ngAfterViewInit() {
        for (var index = 0; index < 10; index++) {
            let cellIndex = (this.curentRowCount % 2 == 0) ? index : (9 - index);
            this.cells[cellIndex] = (new Cell(100 - (index + (this.curentRowCount * 10))));
        }
    }
}