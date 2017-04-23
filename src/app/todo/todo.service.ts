import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos(): Promise<Todo[]> {
        return this.http.get('find')
            .toPromise()
            .then(response => response.json() as Todo[])
            .catch(this.handleError);;
    }
    update(todo: Todo): Promise<Todo> {
        return this.http
            .post('update', todo)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}