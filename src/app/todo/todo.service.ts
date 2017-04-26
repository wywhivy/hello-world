import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    findAll(): Promise<Todo[]> {
        return this.http.get('find')
            .toPromise()
            .then(response => response.json() as Todo[])
            .catch(this.handleError);;
    }
    update(todo: Todo): Promise<Todo> {
        return this.http.post('update', todo)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }
    delete(todo: Todo): Promise<Todo> {
        return this.http.post('delete', todo)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }
    insert(todo: Todo): Promise<Todo> {
        return this.http.post('insert', todo)
            .toPromise()
            .then(() => todo)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}