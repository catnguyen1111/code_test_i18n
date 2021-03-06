import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age;
  constructor(private common: CommonService) {
    this.age = common.age;
   }
   public value:number = 0;
  ngOnInit(): void {
  }
  public increaseAge(){
    this.common.age++;
    this.age = this.common.age;
  }
}
