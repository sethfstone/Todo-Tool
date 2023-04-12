import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Constants } from '../config/constants';


@Injectable({providedIn: 'root'})
export class GrabQuoteService {
	resObj: any;
	quote: string = '';
	author: string = '';

	constructor(private http: HttpClient){
		console.log("service loaded");
	}

	public get(){
		//set header with api key 
		var headers = new HttpHeaders();
		headers = headers.append('x-api-key', String(Constants.API_KEY));

		//send get request
		return this.http.get(Constants.API_ENDPOINT, {'headers': headers});

	}






}