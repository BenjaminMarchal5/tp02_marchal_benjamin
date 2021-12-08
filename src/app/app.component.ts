import { Component } from '@angular/core';
import Formulaire from './Formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPAAngular';
  form = new Formulaire("","","","","",0,"","",0,""); 

  submit(formulaire:Formulaire):void{
    this.form = formulaire; 
  }
}
