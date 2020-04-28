import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingListService {

  constructor(private http: HttpClient) { }

  getArtistsList(): Observable<any> {
    return from(this.http.get<any>('/api/getArtistsList'));
  }
}
