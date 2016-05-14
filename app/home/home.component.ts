import {Component} from "@angular/core";


@Component({
    selector: 'home',
    template: `
        <div class="container col-lg-11">
            <div class="row">
                <div>This is Snake and ladder game:</div>
                <div class="col-md-5">
                    This is Place for rules:
                    <ul>
                        <li>RUle 1</li>
                        <li>Rule 2</li>
                        <li>Rule 3</li>
                        <li>Rule 4</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    this section is for input name
                    <form class="form">
                        <input type="text" class="form-control"  placeholder="name">
                        <input type="text" class="form-control" placeholder="name">
                    </form>
                </div>
            </div>
        </div>
            `
})
export class HomeComponent {


}