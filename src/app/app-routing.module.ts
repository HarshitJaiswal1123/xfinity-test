import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';

const appRoutes: Routes = [
  {path:"", component: HomeComponent},
  {path: "second-page", component: SecondPageComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
