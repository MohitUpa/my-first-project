import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Todo';
import { TodosComponent } from '../todos/todos.component'; 

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo) {
    console.log("onClick in Delete has Trigger");
    this.todoDelete.emit(todo);
  }
}
