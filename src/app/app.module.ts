import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
//import { Validators } from '@angular/forms'
//import { FlexLayoutModule } from '@angular/flex-layout'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashbordComponent } from './Pages/dashbord/dashbord.component';
import { LocationComponent } from './Pages/location/location.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    LoginComponent,
    DashbordComponent,
    LocationComponent,
    ContactComponent,
    HomeComponent,
    NameEditorComponent,
    NavComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    NgbModule  ,
    MatSliderModule,
    FormsModule ,

ReactiveFormsModule,

LayoutModule,

MatToolbarModule,

MatButtonModule,

MatSidenavModule,

MatIconModule,

MatListModule,



//Validators
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
