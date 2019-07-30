import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  imports: [MatListModule, MatAutocompleteModule],
  exports: [MatListModule, MatAutocompleteModule],
})
export class MaterialtwoModule { }
