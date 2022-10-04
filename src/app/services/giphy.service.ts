import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {ErrorService} from './error.service'
import {GiphyModule} from "../pages/giphy-page/giphy.module";
import {environment} from "../../environments/environment";
import {IGiphy} from "../models/giphy";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  GIPHY_URL_TRENDING = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}`;
  GIPHY_URL_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${environment.giphyApiKey}`;

  giphies: IGiphy[] = []
  total: number = 0;

  getTrending(offset: number, limit: number): Observable<IGiphy> {
    return this.http.get<IGiphy>(this.GIPHY_URL_TRENDING, {
      params: new HttpParams({
        fromObject: {limit, offset}
      })
    }).pipe(
      retry(2),
      tap((giphies: any) => {
        this.giphies = giphies.data;
        this.total = giphies.pagination.total_count
      }),
      catchError(this.errorHandler.bind(this))
    )
  }

  search(offset: number, limit: number, text: string): Observable<IGiphy> {
    return this.http.get<IGiphy>(this.GIPHY_URL_SEARCH, {
      params: new HttpParams({
        fromObject: {limit, offset, q: text}
      })
    }).pipe(
      retry(2),
      tap((giphies: any) => {
        this.giphies = giphies.data;
        this.total = giphies.pagination.total_count
      }),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
