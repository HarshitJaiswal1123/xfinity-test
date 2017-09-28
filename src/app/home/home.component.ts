import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [];
  columnNameFlag: string;
  constructor(private appService: AppServiceService) { }

  ngOnInit() {
  	this.appService.getData().subscribe(
  		data => {
  			this.data = data;
  		}

  	);
  }

  sortData(colname){
  	console.log();
  	if(colname === this.columnNameFlag){
  		this.data = _.reverse(_.sortBy(this.data, [colname]));
  		
  	}else{
  		this.data = _.sortBy(this.data, [colname]);
  	}
  	this.columnNameFlag = colname;

  }

}
 