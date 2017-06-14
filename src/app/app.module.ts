import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
        path: '', redirectTo: 'header', pathMatch: 'full'
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'content',
        component: ContentComponent
      }
   ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
