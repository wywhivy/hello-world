import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo';

@Component({
    selector: 'todo',
    template: `
        <input #prop1 type="checkbox" [checked]="todo.isFinished" (change)="onIsFinishedChanged(prop1.checked)"/>
        <input #prop2 type="text" [value]="todo.title" (change)="onTitleChanged(prop2.value)"/>`
})
export class TodoComponent {
    @Input() todo: Todo;

    @Output() updateRequest = new EventEmitter<Todo>();

    update() {
        this.updateRequest.emit(this.todo);
    }

    onIsFinishedChanged(newValue: boolean) {
        this.todo.isFinished = newValue;
        this.update();
    }

    onTitleChanged(newValue: string) {
        this.todo.title = newValue;
        this.update();
    }
}
