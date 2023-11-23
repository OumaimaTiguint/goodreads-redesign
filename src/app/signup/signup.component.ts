import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {Router} from '@angular/router';
import {PasswordValidationService} from '../shared/services/password-validation.service';
import {AuthService} from '../shared/services/auth/auth.service';

@Component({
  	selector: 'app-signup',
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
  	templateUrl: './signup.component.html',
  	styleUrl: './signup.component.scss'
})
export class SignupComponent {
	signupForm!: FormGroup;
	errorMessage: string | undefined;
	@Input() userId: string | undefined;
	@Output() newItemEvent = new EventEmitter<string>();

	constructor(private formBuilder: FormBuilder,
				private router: Router,
				private passwordValidationService: PasswordValidationService,
				private authervice: AuthService) {
		this.signupForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', [Validators.required, this.passwordValidationService.passwordValidator]],
      		confirmPassword: ['', [Validators.required, this.passwordValidationService.confirmPasswordValidator]]
		});
	}
	
	onSubmit() {
		if (this.signupForm.valid) {
			this.authervice.register(this.signupForm?.get('username')?.value, this.signupForm?.get('password')?.value)
				.subscribe((response:any) => {
					if(!this.userId) {
						console.log(response)
						this.router.navigate(['/signin']);
					} else {
						console.log(response);
						this.newItemEvent.emit(response);
					}
				}, (error: any) => {
					console.log({ error });
				});
		} else {
			this.errorMessage = "Invalid form.";
		}
	}

	goToLogin() {
		this.router.navigate(['/signin']);
	}

}
