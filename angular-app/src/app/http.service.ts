import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private _http: HttpClient) {
    
   } 

   getTasks() {    
    return this._http.get('/tasks');
    
  }

  updateTasks(id) {    
    return this._http.get('/tasks/' + id + '/status');
}

  getTask(id) {
    return this._http.get('/tasks/' + id);
  }

  updateTask(id, data) {
    return this._http.put('/tasks/' + id + "/" + data.title + '/' + data.description, {});
  }

  createTask(data) {
    return this._http.post('/tasks/' +  data.title + '/' + data.description, {});
  }

  execution(id) {
    return this._http.delete('/tasks/' + id)
  }
}