import { SignUpComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';


@NgModule({
    declarations: [ SignInComponent, SignUpComponent, HomeComponent ],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, VMessageModule, RouterModule, HomeRoutingModule ],
    providers: [
        SignUpService
    ]
})

export class HomeModule{

}