import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <todo-list></todo-list>`
})
export class AppComponent {
    title = 'TODO List';
}
