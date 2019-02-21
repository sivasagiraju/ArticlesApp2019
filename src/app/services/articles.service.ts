import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../../app.config';
import { Page } from '../Custom/Page';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class Article {
  articleID: number;
  articleName: string;
  articleDescription: string;
  createdDate: Date;
  publishedDate: Date;
  approvedDate: Date;
  isActive: boolean;
}

export class ArticlesService {
  
  constructor( private http : HttpClient,
      @Inject(APP_CONFIG) private config: IAppConfig ) { }

  public getArticles():any{    
    return this.http.get(this.config.apiEndpoint + "api/Article/GetArticle")         
  }

  list(urlOrFilter?: string | object): Observable<Page<Article>> {
    
    return queryPaginated(this.http, this.config.apiEndpoint + "api/Article/GetArticle", urlOrFilter);
    //return this.http.get(this.config.apiEndpoint + "api/Article/GetArticle")         
  }

  
}

export function queryPaginated<T>(http: HttpClient, baseUrl: string, urlOrFilter?: string | object): Observable<Page<T>> {
  let params = new HttpParams();
  let url = baseUrl;

  if (typeof urlOrFilter === 'string') {
    // we were given a page URL, use it
    url = urlOrFilter;
  } else if (typeof urlOrFilter === 'object') {
    // we were given filtering criteria, build the query string
    Object.keys(urlOrFilter).sort().forEach(key => {
      const value = urlOrFilter[key];
      if (value !== null) {
        params = params.set(key, value.toString());
      }
    });
  }

  return http.get<Page<T>>(url, {
    params: params
  });
}
