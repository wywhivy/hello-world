import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-list',
    template: `
    <ul>
        <li *ngFor="let todo of todos">
            <todo [todo]="todo" (updateRequest)="updateTodo($event)"></todo>
        </li>
    </ul>`,
    providers: [TodoService],
})
export class TodoListComponent {
    todos: Todo[];

    constructor(private todoService: TodoService) {

    }

    private getTodos() {
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    ngOnInit(): void {
        this.getTodos();
    }

    updateTodo(todo: Todo) {
        this.todoService.update(todo);
    }
}
