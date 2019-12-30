import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-giphy-search";
  images: any[];

  onSearch(searchResults: any[]) {
    this.images = searchResults.data;
    console.log("Parent getting results", searchResults, this.images);
  }
}
