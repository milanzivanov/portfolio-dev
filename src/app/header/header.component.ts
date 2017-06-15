import { Component, OnInit } from '@angular/core';
import  { FilterPipe } from '../filter.pipe';

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

  listing = [
    {
      name: 'Ivan Grozni',
      age: 34,
      belt: 'yellow'
    },
    {
      name: 'Dunja Meduza',
      age: 25,
      belt: 'blue'
    },
    {
      name: 'Milica Pajser',
      age: 27,
      belt: 'orange'
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
