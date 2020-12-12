import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnapiService {

  private baseUrl = 'https://test.spaceflightnewsapi.net/api/v2';

  constructor(private http: HttpClient) { }

  getArticles(limit = 10) {
    return this.http.get(`${this.baseUrl}/articles?_limit=${limit}`);
  }

}
