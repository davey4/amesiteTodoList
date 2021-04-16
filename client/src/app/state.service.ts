import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  todos: Todo[] = [];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  getTodosAlpha() {
    const sorted = this.todos.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    return sorted;
  }

  getTodosByDate() {
    const sorted = this.todos.sort((a, b) => {
      let c: any = new Date(a.dueDate);
      let d: any = new Date(b.dueDate);
      return c - d;
    });
    return sorted;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deletetodo(index: number) {
    this.todos.splice(index, 1);
  }
}
