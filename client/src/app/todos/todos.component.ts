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
  work: boolean = false;
  exercise: boolean = false;
  leisure: boolean = false;
  errand: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.todos = this.stateService.getAllTodos();
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
    this.medium = false;
    this.low = false;
    this.work = false;
    this.exercise = false;
    this.leisure = false;
    this.errand = false;
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

  addWork($event) {
    $event.preventDefault();
    if (!this.work) {
      this.tags.push('Work');
      this.work = !this.work;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Work');
      this.work = !this.work;
      this.tags = newTags;
    }
  }

  addExercise($event) {
    $event.preventDefault();
    if (!this.exercise) {
      this.tags.push('Exercise');
      this.exercise = !this.exercise;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Exercise');
      this.exercise = !this.exercise;
      this.tags = newTags;
    }
  }

  addLeisure($event) {
    $event.preventDefault();
    if (!this.leisure) {
      this.tags.push('Leisure');
      this.leisure = !this.leisure;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Leisure');
      this.leisure = !this.leisure;
      this.tags = newTags;
    }
  }

  addErrand($event) {
    $event.preventDefault();
    if (!this.errand) {
      this.tags.push('Errand');
      this.errand = !this.errand;
    } else {
      const newTags = this.tags.filter((el) => el !== 'Errand');
      this.errand = !this.errand;
      this.tags = newTags;
    }
  }
}
