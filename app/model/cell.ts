export class Cell {
    position:number;
    userIcons: string[];
    constructor(position: number){
        this.position = position;
        this.userIcons = new Array();
    }
}