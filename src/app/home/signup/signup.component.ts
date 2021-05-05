import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { userNamePassword } from './username-password.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';

@Component({
    templateUrl: './signup.component.html', 
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit{

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

    constructor(private formBuilder: FormBuilder, private userNotTakenValidatorService: UserNotTakenValidatorService, private signUpService: SignUpService, private router: Router,
    private plataformDetectorService: PlataformDetectorService){

    }

    ngOnInit(): void {
        const fn = this.userNotTakenValidatorService.checkUserNametaken();
        this.signupForm = this.formBuilder.group({
            userName: ['', [Validators.required, lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)], this.userNotTakenValidatorService.checkUserNametaken()],
            fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
        },{
            validator: userNamePassword
        })
    }

    ngAfterViewInit(): void {
        this.plataformDetectorService.isPlatformBrowser() &&
        this.emailInput.nativeElement.focus();
    }

    signup(){

        if(this.signupForm.valid || !this.signupForm.pending){
            
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signUpService.signup(newUser)
            .subscribe(() => this.router.navigate(['']),
            err => console.log(err)
            );
            
        }
    }

}