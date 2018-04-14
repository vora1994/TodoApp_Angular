import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  //Adding todo items via constructor
  constructor() {
    this.todos = [
      new Todo(0, "Make dinner tonight!"),
      new Todo(1, "Fold the laundry."),
      new Todo(2, "Learn to make a React app!"),
      new Todo(3, "Complete Assignment!")
    ];

    this.nextId = 4;
  }

  //adding to do items
  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  //returning default to do items
  public getTodos(): Todo[] {
    return this.todos;
  }

  //removing to do items
  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
  }

}
