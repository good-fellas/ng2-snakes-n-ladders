export class User {
    username:string;
    displayImage:string;
    currentCellIndex:number;

    constructor(username:string){
        this.username = username;
        this.currentCellIndex = 0
    }
}