import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
	
  data: any = [];
  categories: string[] = [];
  names: string[] = [];
  constructor(private appService: AppServiceService) { }

  ngOnInit() {
  	this.appService.getData().subscribe(
  		data => {
  			this.processData(data);
  			}
  	);
  }

  processData(data){
  
  	this.data = _.sortBy(_.chain(data).groupBy('name')
  	.map(function(value, key){
  		return {name: key,
  		  		values: value}
  	})
  	.value(), "name");

  	console.log(this.data);
  		let i = 1;

  	this.data.forEach(elem => {
  		let j = 1;
  		elem.values.map(value => {
  			if(i === 4){
  				i++;
  			}
  			if(value.name === ("a"+i)){
  				if(value.category === ("C"+j)){
  				console.log(value.name, value.category);

  				}
  			}
  			j++;
  		});
  			
  		i++;

  	})
  }

}
