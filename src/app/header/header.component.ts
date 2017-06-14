import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Header component work';

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
