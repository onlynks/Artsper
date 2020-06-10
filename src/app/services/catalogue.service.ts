import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  endPoint  = 'https://www.artsper.com/api/artworks';

  constructor(private http: HttpClient) { }

  getArticles(params: {}) {

    params['ipp'] = params['ipp'] === undefined ? 60 : params['ipp'];
    params['page'] = params['page'] === undefined ? 1 : params['page'];

    let httpParams: HttpParams = new HttpParams({
      fromObject: params
    });

    const options = {
      headers: {
        'x-token': localStorage.getItem('token')
      },
      params: httpParams
    };

    return this.http.get<ApiResponse>(this.endPoint , options)
      .pipe(
        map(articles => {
          articles['meta'].pageQuantity = Math.round(articles['meta']['total_items'] / params['ipp']);
          return articles;
        })
      )
  }
}
