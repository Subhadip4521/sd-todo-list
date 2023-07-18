
import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: todo = new todo;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<todo> =new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:todo){
    this.todoDelete.emit(todo);
    console.log('Delete has been done...');
  }
  onCheckboxClick(todo: todo){
    this.todoCheckbox.emit(todo);
  }

}
