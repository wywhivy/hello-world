import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
        <input #prop1 type="checkbox" [checked]="todo?.isFinished" (change)="onIsFinishedChanged(prop1.checked)"/>
        <input #prop2 type="text" class="editableContent" [value]="todo?.title" (change)="onTitleChanged(prop2.value)"/>
        <input *ngIf="todo==null" class="insertButton" type="button" value="+" (click)="onInserted(prop1, prop2)"/>
        <input *ngIf="todo!=null" class="deleteButton" type="button" value="X" (click)="onDeleted()"/>`,
    styles: [`
        .editableContent {
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

    onUpdated() {
        this.updateRequest.emit(this.todo);
    }

    onInserted(prop1: any, prop2: any) {
        var todo = new Todo(prop2.value, prop1.checked);
        this.insertRequest.emit(todo);

        prop1.checked = false;
        prop2.value = "";
    }

    onDeleted() {
        this.deleteRequest.emit(this.todo);
    }

    onIsFinishedChanged(newValue: boolean) {
        if (this.todo != null) {
            this.todo.isFinished = newValue;
            this.onUpdated();
        }
    }

    onTitleChanged(newValue: string) {
        if (this.todo != null) {
            this.todo.title = newValue;
            this.onUpdated();
        }
    }
}
