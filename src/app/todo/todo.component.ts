import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
        <input #prop1 type="checkbox" [checked]="todo?.isFinished" (change)="onIsFinishedChanged(prop1.checked)"/>
        <input #prop2 type="text" class="editable" [value]="todo?.title" (change)="onTitleChanged(prop2.value)"/>
        <input *ngIf="todo==null" class="insertButton" type="button" value="+" (click)="onInserted(prop1, prop2)"/>
        <input *ngIf="todo!=null" class="deleteButton" type="button" value="X" (click)="onDeleted()"/>`,
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
    @Output() insertRequest = new EventEmitter<Todo>();
    @Output() deleteRequest = new EventEmitter<Todo>();

    private onUpdated() {
        this.updateRequest.emit(this.todo);
    }

    private onInserted(prop1: any, prop2: any) {
        var todo = new Todo(prop2.value, prop1.checked);
        this.insertRequest.emit(todo);

        prop1.checked = false;
        prop2.value = "";
    }

    private onDeleted() {
        this.deleteRequest.emit(this.todo);
    }

    private onIsFinishedChanged(newValue: boolean) {
        if (this.todo) {
            this.todo.isFinished = newValue;
            this.onUpdated();
        }
    }

    private onTitleChanged(newValue: string) {
        if (this.todo) {
            this.todo.title = newValue;
            this.onUpdated();
        }
    }
}
