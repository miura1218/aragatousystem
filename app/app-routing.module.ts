import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { OtoiawaseComponent } from './otoiawase/otoiawase.component';
import { ArigatoOkuruComponent } from './arigato-okuru/arigato-okuru.component';
import { UserTuikaComponent } from './user-tuika/user-tuika.component';



const routes: Routes = [
{path:'',component:LoginComponent},

{path:'nav',component:NavComponent,
 children:[
 {path:'otoiawase',component:OtoiawaseComponent},
  {path:'arigato-okuru',component:ArigatoOkuruComponent},
  {path:'user-tuika',component:UserTuikaComponent},
　　　]
}
　　];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
