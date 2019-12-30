import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  apiKey = "CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6";
  apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  searchGiphy(searchTerm: string): Observable<any> {
    const options = searchTerm
      ? { params: new HttpParams().set("q", searchTerm) }
      : {};

    return this.http.get(this.apiURL, options);
  }
}
