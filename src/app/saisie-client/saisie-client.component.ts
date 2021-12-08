import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import Formulaire from '../Formulaire';


@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {
  formulaire : Formulaire = new Formulaire("","","","","",0,"","",0,"");
  @Output() formoutput = new EventEmitter<Formulaire>(); 
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick():void{
    console.log(this.formulaire);
    if(this.formulaire.IsFormCorrect() == '' ) {
      this.formoutput.emit(this.formulaire); 
    }
    
  }
}
