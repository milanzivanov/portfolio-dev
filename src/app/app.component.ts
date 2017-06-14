import { Component } from '@angular/core';
import  {HeaderComponent} from './header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app working!!!';

  // custom event binding
  test(e) {
    alert("Testing custom event binding");
    console.log(e);
  }

}
