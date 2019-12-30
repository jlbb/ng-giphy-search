import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  providers: [SearchService],
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup = new FormGroup({
    searchString: new FormControl("foo")
  });
  inputText: FormControl = new FormControl("Reactive form control", [
    Validators.required,
    Validators.minLength(4)
  ]);

  filterWords = ["fuck", "fool"];
  rgx = new RegExp(this.filterWords.join("|"), "gi");

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  filterSwearWords() {
    const filterWord = this.rgx.test(this.searchForm.value.searchString);

    if (filterWord) {
      this.searchForm.setValue({
        searchString: this.searchForm.value.searchString.replace(
          this.rgx,
          "****"
        )
      });
    }
  }

  submitSearch() {
    const searchInput = this.searchForm.value.searchString;

    this.searchService.searchGiphy(searchInput).subscribe(giphies => {
      console.log("Giphies", giphies);
      this.search.emit(giphies);
    });
  }
}
