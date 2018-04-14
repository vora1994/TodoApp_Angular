import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  public todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  // add todoText to the constructor 
  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
