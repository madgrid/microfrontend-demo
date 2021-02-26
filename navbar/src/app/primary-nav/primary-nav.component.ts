import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'navbar-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
