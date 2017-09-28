import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {

  constructor(private http: Http) { }

  getData() {
  	return this.http.get("assets/data.json").map((data) => {
 		return data.json(); 	
  	})
  }

}
