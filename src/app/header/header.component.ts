import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Welcome to the header component bro...';

  @Output() onTesting = new EventEmitter();
  fireTestEvent(e) {
    this.onTesting.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
