import { Component, OnInit } from '@angular/core';
import { Constants } from './config/constants';

@Component({
	selector: 'app-landing',
	template: `<router-outlet></router-outlet>`,
})


export class AppComponent { 
	name = 'Seth'; 


	constructor(){
	}

	ngOnInit(){
		console.log(Constants.TitleOfSite);
		console.log(Constants.API_ENDPOINT);
		console.log(Constants.API_KEY);
	}
}