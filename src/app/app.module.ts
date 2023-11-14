import {HttpClientModule} from '@angular/common/http';
import {BooksService} from './shared/services/books.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {FormsModule} from '@angular/forms';
import {SearchModule} from './shared/components/search/search.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {HomeModule} from './home/home.module';
import {StarRatingModule} from 'angular-star-rating';

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
		SearchModule,
		MatExpansionModule,
		HttpClientModule,
		HomeModule,
		StarRatingModule.forRoot()
  	],
  	providers: [
		BooksService
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
