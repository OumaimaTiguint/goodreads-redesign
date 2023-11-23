import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './shared/services/books.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {StarRatingModule} from 'angular-star-rating';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';

@NgModule({
  	declarations: [
    	AppComponent
  	],
  	imports: [
    	BrowserModule,
    	AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		HttpClientModule,
		HomeComponent,
		SignupComponent,
		SigninComponent,
		StarRatingModule.forRoot()
  	],
  	providers: [
		BooksService
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
