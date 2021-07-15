import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './Pages/dashbord/dashbord.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LocationComponent } from './Pages/location/location.component';
import { ContactComponent } from   './Pages/contact/contact.component'


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'training',     component: DashbordComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'register',    component: RegisterComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'location',     component:LocationComponent },
  { path: 'contact',     component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
