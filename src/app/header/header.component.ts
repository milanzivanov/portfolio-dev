import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Welcome to the header component bro...';

  data = (
    {
      name: 'Milan',
      status: 'junior'
    }
  )

  // directives
  classes = {'blue': true, 'red': false, 'underline': false};

  test123 = true;

  constructor() { }

  ngOnInit() {
  }

}
