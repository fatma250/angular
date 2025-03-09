import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ResidencesComponent } from './Residencess/residences/residences.component';
import { ResidenceDetailsComponent } from './Residencess/residence-details/residence-details.component';
import { HomeComponent } from './home/home.component';
import { AddResidenceComponent } from './Residencess/add-residence/add-residence.component';
import { UpdateResidenceComponent } from './Residencess/update-residence/update-residence.component';



const routes: Routes = [
  {path:"", redirectTo:"residences", pathMatch:'full' },
  {path:"residences", component: ResidencesComponent},
  {path:"residenceD/:id", component: ResidenceDetailsComponent},
  {path:'add', component:AddResidenceComponent},
  {path:"update/:id", component:UpdateResidenceComponent},
  {path:"**", component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
