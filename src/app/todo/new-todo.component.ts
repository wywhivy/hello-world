import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'new-todo',
    template: `
        <input type="checkbox" [(ngModel)]="todo.isFinished"/>
        <input type="text" class="editable" [(ngModel)]="todo.title"/>
        <input class="insertButton" type="button" value="+" (click)="onInserted()"/>`,
    styles: [`
        .editable {
            border: none;
            border-bottom: 1px solid lightgray;
            outline: none;
        }
        .insertButton {
            font-size: 20px;
            color: green;
            background: transparent;
            border: none;
        }
    `]
})
export class NewTodoComponent {
    @Input() todo: Todo;

    @Output() insertRequest = new EventEmitter<Todo>();

    private onInserted() {
        this.insertRequest.emit(this.todo);
    }
}
