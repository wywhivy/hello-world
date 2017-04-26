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

    ngOnInit(): void {
        this.getTodos();
    }

    private getTodos() {
        var self = this;
        self.todoService.findAll().then(function (todos) {
            self.todos = todos;
        });
    }

    private updateTodo(todo: Todo) {
        var self = this;
        self.todoService.update(todo).then(function () {
            self.getTodos();
        });
    }

    private deleteTodo(todo: Todo) {
        var self = this;
        self.todoService.delete(todo).then(function () {
            self.getTodos();
        });
    }

    private insertTodo(todo: Todo) {
        var self = this;
        self.todoService.insert(todo).then(function () {
            self.getTodos();
        });
    }
}
