import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @ViewChild('todoEntry') 
  todoEntry: ElementRef;
  
  todos: Todo[];
  
  input: string;
  
  constructor(elementRef: ElementRef) {
    this.todos = [];
    this.input = '';
    this.todoEntry = elementRef;
  }

  ngOnInit() {
    this.todoEntry.nativeElement.focus();
  }

  addTodo() {
    if (this.input.length > 1) {
      this.todos.push({ text: this.input, complete: false });
      this.input = ''; 
    }
  }

  rmTodo(id: number) {
    this.todos.splice(id, 1);
  }

  done(id: number) {
    this.todos[id].complete = true;
  }

  undone(id: number) {
    this.todos[id].complete = false;
  }

  doneMarcation(id: number): string {
    if (this.todos[id].complete) {
      return 'line-through';
    }
    return 'none';
  }
}
