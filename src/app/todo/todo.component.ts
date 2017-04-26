import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
        <input type="checkbox" [(ngModel)]="todo.isFinished" (change)="onUpdated()"/>
        <input type="text" class="editable" [(ngModel)]="todo.title" (change)="onUpdated()"/>
        <input class="deleteButton" type="button" value="X" (click)="onDeleted()"/>`,
    styles: [`
        .editable {
            border: none;
            border-bottom: 1px solid lightgray;
            outline: none;
        }
        .deleteButton {
            color: red;
            background: transparent;
            border: none;
        }
    `]
})
export class TodoComponent {
    @Input() todo: Todo;

    @Output() updateRequest = new EventEmitter<Todo>();
    @Output() deleteRequest = new EventEmitter<Todo>();

    private onUpdated() {
        this.updateRequest.emit(this.todo);
    }

    private onDeleted() {
        this.deleteRequest.emit(this.todo);
    }
}
