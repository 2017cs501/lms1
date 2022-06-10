import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [
    LogincomponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LogincomponentComponent
  ]
})
export class LoginAuthModule { }
