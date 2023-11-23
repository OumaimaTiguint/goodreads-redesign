import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth/auth.service';
import {NavigationExtras, Router} from '@angular/router';
import {PasswordValidationService} from '../shared/services/password-validation.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  	selector: 'app-signin',
  	standalone: true,
  	imports: [
		CommonModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		ReactiveFormsModule
	],
  	templateUrl: './signin.component.html',
  	styleUrl: './signin.component.scss'
})
export class SigninComponent {
	errorMessage: string | undefined;
	loginForm!: FormGroup;

	constructor(private authService: AuthService,
				private router: Router,
				private formBuilder: FormBuilder,
				private passwordValidationService: PasswordValidationService) {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', [Validators.required, this.passwordValidationService.passwordValidator]]
		});
	}

	goToRegister() {
		this.router.navigate(['/signup']);
	}

	onSubmit() {
		if (this.loginForm.valid) {
			this.authService.login(this.loginForm?.get('username')?.value, this.loginForm?.get('password')?.value)
				.subscribe((response:any) => {
					const userId = response.user._id;
					const navigationExtras: NavigationExtras = {
						queryParams: {
					  		userId: userId
						}
					};
			
					this.router.navigate(['/home'], navigationExtras);
					}, error => {
						console.log({ error });
					});
		} else {
			this.errorMessage = "Invalid form.";
		}
	}
}
