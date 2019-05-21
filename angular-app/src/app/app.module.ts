import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { FormsModule } from '@angular/forms';
import { CreateDataComponent } from './create-data/create-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDataComponent,
    CreateDataComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule   
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
