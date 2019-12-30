import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  apiKey = "CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6";
  apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}`;

  params = new HttpParams().set("rating", "g");

  constructor(private http: HttpClient) {}

  searchGiphy(searchTerm: string): Observable<any> {
    const params = this.params.append("q", searchTerm);

    return this.http.get(this.apiURL, { params });
  }
}
