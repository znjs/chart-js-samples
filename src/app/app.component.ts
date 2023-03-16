import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chart-js';
  displayTab: string = 'pie';

  updateTab(str: string) {
    this.displayTab = str;
  }
}
