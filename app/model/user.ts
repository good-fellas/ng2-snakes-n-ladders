export class User {
    username:string
    displayImage:string
    currentCellIndex:number

    //We will assign a random icon class when a new user will be created
    bootstrapUserIconClasses = new Array()
    
    constructor(username:string){
        this.username = username
        this.currentCellIndex = 0
    }
}