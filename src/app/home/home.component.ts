import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Cat Nguyen"
  public age;
  public vehicles = ['honda','toyota','motor']
  @Input() countChild:number = 0;
  @Input() countChild1:number = 0;
  public count = 0;
  @Output()
  countChanged= new EventEmitter();
  tang(){
    this.count++;
    this.countChanged.emit(this.count);
  }
  giam(){
    this.count--;
    this.countChanged.emit(this.count);
  }
  constructor(private common: CommonService) {
    this.age = common.age;
   }

  ngOnInit(): void {
  }
  public increaseAge(){
    this.common.age++;
    this.age = this.common.age;
  }


}
