import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landingComponent/landing.component';
import { TodosComponent } from './todoComponent/todos.component';
import { GrabQuoteService } from './quoteblock/grabquote.service';


@NgModule({
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ],
	providers: [ GrabQuoteService ]
})


export class AppModule { }