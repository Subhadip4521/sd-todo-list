import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string | undefined;
  description: string | undefined;

  @Output() todoAdd: EventEmitter<todo> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={

      slno: 1,
      title: this.title,
      description: this.description,
      active:true,
    }
    this.todoAdd.emit(todo);
  }


}
