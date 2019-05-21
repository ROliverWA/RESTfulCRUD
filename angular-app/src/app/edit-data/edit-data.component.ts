import { HttpService } from './../http.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent{

  constructor(private _http: HttpService) { }

@Input() requested: object ={};
@Output() canceled = new EventEmitter<boolean>();
@Output() updated = new EventEmitter<boolean>();




cancelClicked() {  
  console.log('got to click event')
  this.canceled.emit(false);
}

updateClicked(record) {
  console.log(record);
 let  update = this._http.updateTask(record._id, {title: record.title, description: record.description});
 update.subscribe(results=> {this.updated.emit(true); this.canceled.emit(false);})
 
}

}
