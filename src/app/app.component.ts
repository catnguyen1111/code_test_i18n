import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  public countParent:number = 0;
  public countChild:number = 99;
  public countChild1:number = 199;
  countChangedHandle(count:number):void {
    this.countParent = count;
  }
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'nl','vi']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
