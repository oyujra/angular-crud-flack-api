import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroListComponent } from './components/registro-list/registro-list.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';

const routes: Routes = [
  { path: '', component: RegistroListComponent },
  { path: 'add', component: RegistroFormComponent },
  { path: 'edit/:id', component: RegistroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
