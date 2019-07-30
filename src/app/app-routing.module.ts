import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'autocomplete', component: AutocompleteComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
