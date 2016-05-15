export class User {
    username:string;
    displayImage:string;
    currentCellIndex:number;
    rank:number;

    constructor(username:string){
        this.username = username;
        this.currentCellIndex = 0
    }
}