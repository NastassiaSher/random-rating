import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListComponent } from './artists-list.component';
import {RatingListService} from '../services/rating-list.service';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListItem} from '../models/list-item.model';
import {ListItemOutput} from '../models/list-item-output.model';
import {Observable} from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EXPECTED_RESPONSE} from '../../assets/json-responses/consts_for_tests';

const expectedResponse: any = require('../../assets/json-responses/data.json');

@Component({selector: 'app-list-item', template: ''})
class ListItemComponent {
  @Input() public listItem: ListItem;
  @Input() public itemIndex: number;
  @Output() public rateToEmit = new EventEmitter<ListItemOutput>();
}

@Component({selector: 'mat-progress-bar', template: ''})
class MatProgressBarComponent {
  @Input() public listItem: ListItem;
  @Input() public itemIndex: number;
  @Output() public rateToEmit = new EventEmitter<ListItemOutput>();
}

class MockRatingListService {
  getArtistsList() {
    return new Observable(subscriber => {
      subscriber.next(expectedResponse);
    });
  }
}

describe('ArtistsListComponent', () => {
  let component: ArtistsListComponent;
  let fixture: ComponentFixture<ArtistsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsListComponent, MatProgressBarComponent, ListItemComponent ],
      imports: [BrowserAnimationsModule],
      providers: [
        {provide: RatingListService, useClass: MockRatingListService }
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    spyOn(component, 'applyBackgroundColor');
    expect(component).toBeTruthy();
  });
});

