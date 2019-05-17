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
  constructor(private _httpService: HttpService) {
  let response = _httpService.getTasks();
  response.subscribe(res => {console.log(res);this.results = res})
  }
}
