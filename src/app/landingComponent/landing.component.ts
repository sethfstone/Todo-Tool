import { Component, OnInit, Input } from '@angular/core';
import { TodosComponent } from '../todoComponent/todos.component';

@Component({
	selector: 'landing',
	templateUrl : './landing.component.html',
	styleUrls: [ './landing.component.css' ]
})

export class LandingPageComponent implements OnInit { 
	//@Input() background: Number = 0;
	backgroundDec: Number = 0;
	backgroundUrl: String = '';

	ngOnInit(){
		//Decides random number for choosing random background each time someone lands
		this.backgroundDec = Math.floor(Math.random() * 16) + 1;
		this.backgroundUrl = '../../assets/images/bg' + String(this.backgroundDec) + '.jpg';
	}
	
}