import { Component } from "@angular/core";
import { SearchService } from "./search-bar/search.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [SearchService],
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-giphy-search";
  images: any;
  pages: number;

  searchWord: string;

  constructor(private searchService: SearchService) {}

  onSearch(searchWord: string) {
    this.searchWord = searchWord;

    this.searchService.searchGiphy(this.searchWord).subscribe(searchResults => {
      console.log("Giphies", searchResults);
      this.images = searchResults.data;

      if (searchResults.pagination) {
        this.pages =
          Math.ceil(
            searchResults.pagination.total_count /
              searchResults.pagination.count
          ) || 0;
      }

      console.log("Parent getting results", searchResults, this.images);
    });
  }

  onSearchPage(page: number) {
    this.searchService
      .searchGiphy(this.searchWord, page)
      .subscribe(searchResults => {
        console.log("Giphies on searchPage", searchResults);
        this.images = searchResults.data;
      });
  }
}
