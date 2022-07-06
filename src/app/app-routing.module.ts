import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { AppComponent } from './app.component';

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
        component:MeComponent
      }
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
