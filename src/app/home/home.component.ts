import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = [];

  constructor(private appService: AppServiceService) { }

  ngOnInit() {
  	this.appService.getData().subscribe(
  		data => {
  			this.data = data;
  		console.log(this.data);
  			
  		}

  	);
  }

}
 