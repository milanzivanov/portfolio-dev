import { Component } from '@angular/core';
import  {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app working!!!';
}
