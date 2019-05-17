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
  showThem: boolean = false;
  constructor(private _httpService: HttpService) {
      
  }

  GetBtnClick()  {
    let task = this._httpService.getTasks();
    task.subscribe(res => this.results = res);
    
  }

  DisplayDetails() {
    this.showThem = true;    
  }

  HideDetails (){
    this.showThem = false;
  }
    
  
}
