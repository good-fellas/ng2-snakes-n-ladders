import {Component} from "@angular/core";
import {Cell} from "../model/cell"
import {CellComponent} from "./cell.component";

@Component({
    selector: 'board',
    directives: [CellComponent],
    template: `
     <div class="game-board">
        <div cell-row class="row board-row" *ngFor="let rowCell of cells; let i = index" curent-row-count="{{i}}"></div>       
     </div>
    `,
    styles: [`
        .game-board {
            background-image: url('../../assets/images/snl.jpg');
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .board-row {
            margin-right: 0px;
            margin-left: 0px;
        }
    `]
})
export class BoardComponent {
    cells = new Array();
    constructor(){
        for (var i = 0; i < 10; i++) {
            this.cells[i] = i;
        }
    }
}