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

  constructor() { }

  ngOnInit() {
  }

}
