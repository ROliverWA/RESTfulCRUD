import { HttpService } from './../http.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent{

  constructor( private _http: HttpService) {}
  newName: string="";
  newDesc: string="";

  

  @Input() requested: object ={};
  @Output() canceled = new EventEmitter<boolean>();
  @Output() created = new EventEmitter<boolean>();
  
  
  
  
  cancelClicked() {  
    console.log('got to click event')
    this.canceled.emit(false);
  }
  
  createClicked(record) {
    console.log(this.newName);
    console.log(this.newDesc);
   let  newTask = this._http.createTask({title: this.newName, description: this.newDesc});
   newTask.subscribe(results=> {this.created.emit(true); this.canceled.emit(false);})
   
  }
 
}
