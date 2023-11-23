import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Injectable({
  	providedIn: 'root'
})
export class PasswordValidationService {
	passwordValidator(control: AbstractControl): ValidationErrors | null {
		const password = control.value;
		const hasNumber = /[0-9]/.test(password);
		const hasUpper = /[A-Z]/.test(password);
		const hasLower = /[a-z]/.test(password);
		const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

		const isValid = hasNumber && hasUpper && hasLower && hasSpecial && password.length >= 6;
	
		return isValid ? null : { 'invalidPassword': true };
	}

	confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
		const password = control.parent?.get('password')?.value;
		const confirmPassword = control.value;
	
		return password === confirmPassword ? null : { 'passwordMismatch': true };
	}
}
