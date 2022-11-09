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
import {SearchModule} from './shared/components/search/search.module';
import {MatExpansionModule} from '@angular/material/expansion';

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
		MatExpansionModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
