import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { NewTodoComponent } from './todo/new-todo.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, TodoListComponent, TodoComponent, NewTodoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
