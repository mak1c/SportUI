import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
