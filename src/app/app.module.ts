import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, TodoListComponent, TodoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
