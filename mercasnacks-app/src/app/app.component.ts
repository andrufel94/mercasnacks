import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title;
  public fillerNav: any;

  constructor() {
    this.title = "Mercasnacks";
    this.fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  }
}
