import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';

import { NewsComponent } from './modules/news/news.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"home",component:AppContentComponent},
  {path:"news",component:NewsComponent},
  {path:"sign-up",component:SignupComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [ 
  AppContentComponent,
];

