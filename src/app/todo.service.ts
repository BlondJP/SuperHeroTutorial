import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {

    constructor (private _http: Http) {}

    public test()
    {
        return 'test';
    }

    public todoFixtures() : Todo[]
    {
        let fakeTodos : Todo[] = [];
        fakeTodos.push({id : 1, content: 'hello world', completed: true});
        fakeTodos.push({id : 2, content: 'lol', completed: true});
        fakeTodos.push({id : 3, content: 'Iam the game', completed: true});

        return fakeTodos;
    }

    public getTodos() : Observable<Todo[]>
    {
        return this._http.get('http://localhost:3000/todos.json')
            .map(function (res: Response){ var todos = res.json(); return todos; })
            .catch(this.handleError);
    }

  /* Copie de la doc angular 2*/  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}