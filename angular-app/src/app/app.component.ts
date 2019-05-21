import { HttpService } from './http.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Restful Task API Angular Style"
  results;
  requested: object;
  showThem: boolean = false;  
  editWindow: boolean = false;
  createWindow: boolean = false;
  resultWin: boolean = true;
  constructor(private _httpService: HttpService) {
      this.GetTasks();
  }

  GetTasks()  {
    let task = this._httpService.getTasks();
    task.subscribe(res => this.results = res);
    
  }

  ChangeCompleted(id) {    
    let change = this._httpService.updateTasks(id);
    change.subscribe(res => this.GetTasks());
  
  }

  GetOneTask(id, e) {
    console.log('compon GetOneTask')
    let requested = this._httpService.getTask(id);
    requested.subscribe(res=> {this.resultWin=false; this.editWindow = true; this.requested = res});
    e.stopPropagation();

  }

  hideWindows() {
    this.editWindow = false;
    this.createWindow = false;
    this.resultWin = true;
  }
  
  EnableAddWindow() {
    this.createWindow = true;
    this.resultWin = false;
  }

  DeleteOne(id) {
    let DeadManWalking = this._httpService.execution(id);
    DeadManWalking.subscribe(res=> this.GetTasks());

  }
}
