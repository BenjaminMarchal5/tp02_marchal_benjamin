import { Component, Input, OnInit } from '@angular/core';
import Formulaire from '../Formulaire';

@Component({
  selector: 'app-recapitulatif-saisie',
  templateUrl: './recapitulatif-saisie.component.html',
  styleUrls: ['./recapitulatif-saisie.component.css']
})
export class RecapitulatifSaisieComponent implements OnInit {
  @Input() formulaire = new Formulaire("","","","","",0,"","",0,"");
  constructor() { }

  ngOnInit(): void {
  }

}
