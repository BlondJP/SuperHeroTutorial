import { TodoService } from './todo.service';
import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todos-list.component.html',
})
export class AppComponent
{
  private todos : Todo[];

  constructor(private _todoService : TodoService) {
    
      this.getTodos();

  }

  private getTodos() {
      this._todoService.getTodos()
        .subscribe(
          todos => this.todos = todos,
          error =>  console.log(error)
        );
  }

  public addTodo(newTodoText : string) {
    /* Without Api */
    let todo = new Todo(newTodoText, true);
    this.todos.push(todo);
  }

  public removeTodo(todo : Todo) {
    /*Without Api*/
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(`Todo n°${index + 1} has been removed.`);
  }


}
