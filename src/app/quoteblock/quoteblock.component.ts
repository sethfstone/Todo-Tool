import { Component, OnInit, Input } from '@angular/core';
import { GrabQuoteService } from './grabquote.service';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';


@Component({
	selector: 'quoteblock',
	templateUrl : './quoteblock.component.html',
	styleUrls: [ './quoteblock.component.css' ]
})

export class QuoteBlockComponent implements OnInit { 
	quote: any;
	author: any;
	quoteObj: any;

	constructor(private service: GrabQuoteService){
		//this.service.get();
		//console.log(this.service.handleQuote());
	}

	ngOnInit(){
		//runs the service that send API req. for quote and sets it locally
		var test = this.service.get();
		test.subscribe(response => {
			this.quoteObj = response;
			this.quote = this.quoteObj[0].quote;
			this.author = this.quoteObj[0].author;
		});

	}

	printQuote(){
		console.log(this.author, this.quote);
	}





	/*
	ngOnInit(){
		//Decides random number for choosing random background each time someone lands
		this.backgroundDec = Math.floor(Math.random() * 5) + 1;
		this.backgroundUrl = '../../assets/images/bg' + String(this.backgroundDec) + '.jpg';
	}
	*/
	
}