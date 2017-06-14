import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Welcome to the header component bro...';

  // custom property binding @Input
  @Input() test;

  constructor() { }

  ngOnInit() {
  }

}
