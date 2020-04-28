import { TestBed } from '@angular/core/testing';

import { RatingListService } from './rating-list.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable} from 'rxjs';

const expectedResponse: any = require('../../assets/json-responses/data.json');

class HttpClientStudService {
  public get(url) {
    if (url === '/api/getArtistsList') {
      return new Observable(expectedResponse);
    }
  }
}

describe('RatingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ],
    providers: [
      { provide: HttpClient, useClass: HttpClientStudService }
    ]
  }));

  it('should be created', () => {
    const service: RatingListService = TestBed.get(RatingListService);
    expect(service).toBeTruthy();
  });

  xit('should return relevant response', () => {
    const service: RatingListService = TestBed.get(RatingListService);
    service.getArtistsList().subscribe(res => {
      expect(res.body.length).toEqual(11);
    });
  });
});

