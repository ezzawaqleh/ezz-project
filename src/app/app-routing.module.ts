import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { AppComponent } from './app.component';
import { GuardService } from './guard.service';

const routes: Routes = [
  {
    path:'about',
    children:[
      {
        path:'',
        component:AboutComponent
      },
      {
        path:'me/:id',
        component:MeComponent,canActivate:[GuardService]
      },    
    ]
  },
  {
    path:'data',
    component:ApiDataComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
