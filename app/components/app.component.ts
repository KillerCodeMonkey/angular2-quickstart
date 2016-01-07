import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Heyho {{name}}</h1>'
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}
