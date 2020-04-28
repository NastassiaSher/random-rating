import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedDataService } from '../mocks/mocked-data-service';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ListItemComponent } from './artists-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistsListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    environment.mockBackend ? HttpClientInMemoryWebApiModule.forRoot(MockedDataService,
      {
        delay: 1000,
        passThruUnknownUrl: true,
      }) : [],
    InlineSVGModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
