import { Component } from "@angular/core";
import { GiphyService } from "./giphy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [GiphyService],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  images: any;
  pages: number;

  searchWord: string;

  constructor(private giphyService: GiphyService) {}

  onSearch(searchWord: string) {
    this.searchWord = searchWord;

    this.giphyService.searchGiphy(this.searchWord).subscribe(searchResults => {
      this.images = searchResults.data;

      if (searchResults.pagination) {
        this.pages =
          Math.ceil(
            searchResults.pagination.total_count /
              searchResults.pagination.count
          ) || 0;
      }

      console.log("Search result after SEARCH", searchResults, this.images);
    });
  }

  onSearchPage(page: number) {
    this.giphyService
      .searchGiphy(this.searchWord, page)
      .subscribe(searchResults => {
        console.log("Search result change PAGE!", searchResults);
        this.images = searchResults.data;
      });
  }
}
