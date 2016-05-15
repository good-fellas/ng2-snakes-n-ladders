import {Component, Input} from "@angular/core";
import {Cell} from "../model/cell"
import {GameEngineService} from "../services/gaming-engine";

@Component({
    selector: '[cell-row]',
    directives: [],
    template: `
        <div class="col-lg-1 cell {{cell.position}}" *ngFor="let cell of cells; let ij = index" >
            &nbsp; <i class="user-icon fa {{icon}}" *ngFor="let icon of cell.userIcons"></i>
        </div>
    `,
    styles: [`
        .cell { 
            border: 1px solid black;
            height: 65px;
            width: 65px;
         }
        .user-icon {
            font-size: 200%;
            color: black;
            background-color: white;
        }
    `]
})
export class CellComponent {
    cells = new Array();
    @Input('curent-row-count') curentRowCount: number;
    constructor(public gameEngineService:GameEngineService){

    }
    ngAfterViewInit() {
        for (var index = 0; index < 10; index++) {
            let cellIndex = (this.curentRowCount % 2 == 0) ? index : (9 - index);
            let cellValue = (100 - (index + (this.curentRowCount * 10)));
            let cell = new Cell(cellValue);
            this.cells[cellIndex] = cell;
            this.gameEngineService.cells[cellValue] = cell;
        }
    }
}