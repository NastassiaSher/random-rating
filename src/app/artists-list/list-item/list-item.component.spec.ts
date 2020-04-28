import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import {EXPECTED_ITEM} from '../../../assets/json-responses/consts_for_tests';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.listItem = EXPECTED_ITEM;
    component.itemIndex = 0;
    fixture.detectChanges();
  });

  it('should create ListItemComponent', () => {
    expect(component).toBeTruthy();
  });


  it('should populate proper  stars array', () => {
    component.populateStars();
    expect(component.starsArr[5]).toEqual('star_border');
  });
});
