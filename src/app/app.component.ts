import { Component } from '@angular/core';
import  {HeaderComponent} from './header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app working!!!';

  // custum property binding @Input
  test = {
    name: 'Milan',
    status: 'Junior',
    age: 34
  }

}
