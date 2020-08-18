import { Component, OnInit } from '@angular/core';
import { routeAnimation } from '../shared/animations';

@Component({
  selector: 'chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss'],
  animations: [routeAnimation]
})
export class ChromeComponent implements OnInit {
  navBarShow = false;
  dropDownShow = false;
  test = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavBar() {
    this.navBarShow = !this.navBarShow;
  }

  toggleDropDown() {
    this.dropDownShow = !this.dropDownShow;
    console.log(this.dropDownShow);
  }

}
