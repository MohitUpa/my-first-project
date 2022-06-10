import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: '1',
        title: 'This is Title1',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate architecto accusamus!',
        active: true
      },
      {
        sno: '2',
        title: 'This is Title2',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate architecto accusamus!',
        active: true
      },
      {
        sno: '3',
        title: 'This is Title3',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate architecto accusamus!',
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }

}
