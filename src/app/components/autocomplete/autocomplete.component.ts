import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Tatoine', 'Alderaan', 'Yavin IV', 'Hoth', 'Dagobah', 'Endor', 'Naboo', 'Cruscant', 'Kamino'];


  constructor() { }


  ngOnInit() {
  }

}
