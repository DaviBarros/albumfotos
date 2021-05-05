import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    title: string;
    fromUrl: string;
    
    loginForm: FormGroup;
    @ViewChild('userNameInput')userNameInput: ElementRef<HTMLInputElement>;


    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private plataformDetectorService: PlataformDetectorService,
        private activatedRoute: ActivatedRoute
     
        ){

    }
    
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => 
            this.fromUrl = params['fromUrl']
        );
        this.loginForm  = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });       
        // this.plataformDetectorService.isPlatformBrowser() &&
        // this.userNameInput.nativeElement.focus();
    }

    ngAfterViewInit(): void {
        this.plataformDetectorService.isPlatformBrowser() &&
        this.userNameInput.nativeElement.focus();
    }

    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password)
            .subscribe(
                () =>  {
                    if(this.fromUrl){
                        this.router.navigateByUrl(this.fromUrl);
                    }else{
                        this.router.navigate(['user', userName]);
                    }                    
                },                
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.plataformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid username or password.');
                }
        );
    }
       
}

