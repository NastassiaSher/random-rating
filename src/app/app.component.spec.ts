import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({selector: 'app-header', template: ''})
class HeaderComponent {}

@Component({selector: 'app-artists-list', template: ''})
class ArtistsListComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ArtistsListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });

  it(`should have as title 'random-rating'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('random-rating');
  });

  it('should create app-header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(document.getElementsByTagName('app-header')).toBeDefined();
  });

  it('should create app-artists-list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(document.getElementsByTagName('app-artists-list')).toBeDefined();
  });
});
