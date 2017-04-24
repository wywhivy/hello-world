import { Component } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-list',
    template: `
    <ol>
        <li *ngFor="let todo of todos">
            <todo [todo]="todo" (updateRequest)="updateTodo(todo)" (deleteRequest)="deleteTodo(todo)"></todo>
        </li>
        <todo (insertRequest)="insertTodo($event)"></todo>
    </ol>`,
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

    deleteTodo(todo: Todo) {
        this.todoService.delete(todo);

        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }

    insertTodo(todo: Todo) {
        this.todoService.insert(todo);
        this.getTodos();
    }
}
