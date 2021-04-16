import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '../state.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  tags: string[] = [];
  formError: boolean;
  high: boolean = false;
  medium: boolean = false;
  low: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.todos = this.stateService.getAllTodos();
    console.log(this.todos);
  }

  addTodo(form: NgForm) {
    // console.log(form);
    if (!form.valid) {
      return (this.formError = true);
    }

    this.stateService.addTodo({
      tags: this.tags,
      ...form.value,
    });

    this.high = false;
    this.tags = [];
    this.formError = false;
    form.reset();
  }

  deleteTodo(i) {
    // console.log(i);
    this.stateService.deletetodo(i);
  }

  sortAlpha() {
    this.todos = this.stateService.getTodosAlpha();
    console.log(this.todos);
  }

  sortByDate() {
    this.todos = this.stateService.getTodosByDate();
  }

  addHigh($event) {
    $event.preventDefault();
    if (!this.high) {
      this.tags.push('High Priority');
      this.high = !this.high;
    } else {
      const newTags = this.tags.filter((el) => el !== 'High Priority');
      this.high = !this.high;
      this.tags = newTags;
    }
  }

  addMedium($event) {
    $event.preventDefault();
    if (!this.medium) {
      this.tags.push('Medium Priority');
      this.medium = !this.medium;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Medium Priority');
      this.medium = !this.medium;
      this.tags = newTags;
    }
  }

  addLow($event) {
    $event.preventDefault();
    if (!this.low) {
      this.tags.push('Low Priority');
      this.low = !this.low;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Low Priority');
      this.low = !this.low;
      this.tags = newTags;
    }
  }
}
