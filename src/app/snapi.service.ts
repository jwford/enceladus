import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnapiService {

  private baseUrl = 'https://test.spaceflightnewsapi.net/api/v2';

  constructor(private http: HttpClient) { }

  getArticles(limit = 10, skip = 0) {
    // TODO: return entire response object
    return this.http.get<SnapiArticle[]>(`${this.baseUrl}/articles?_limit=${limit}${skip ? `&_start=${skip}` : ''}`,
      { observe: 'body', responseType: 'json' });
  }

}

export interface SnapiArticle {
  featured: boolean;
  id: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: Date;
  summary: string;
  title: string;
  updatedAt: Date;
  url: string;
}
