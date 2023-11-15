import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './shared/services/books.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {StarRatingModule} from 'angular-star-rating';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './shared/components/search/search.component';

@NgModule({
  	declarations: [
    	AppComponent
  	],
  	imports: [
    	BrowserModule,
    	AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		SearchComponent,
		MatExpansionModule,
		HttpClientModule,
		HomeComponent,
		StarRatingModule.forRoot()
  	],
  	providers: [
		BooksService
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
