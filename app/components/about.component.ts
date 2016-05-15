import {Component} from "@angular/core";

@Component({
    selector: 'about',
    templateUrl: '/templates/about.html',
    styles: [`
        .user-img {
            height: 35%;
            border-right: 1px solid #ccc;
        }
        .bio {
            border-bottom: 1px solid #ccc;
            margin: 2% 0%;
        }
        .bio-last {
            border-bottom: 0px !important;
        }
        .pad-2x {
            padding: 2% 0%;
        }
    `]
})

export class AboutComponent {
}