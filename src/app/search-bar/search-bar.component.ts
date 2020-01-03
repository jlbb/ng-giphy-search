import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<any>();

  searchForm: FormGroup = new FormGroup({
    searchString: new FormControl("", [Validators.required])
  });
  searchErrors: any = {};

  filterWords = ["fuck", "fool", "damn", "shit", "whore"];
  rgx = new RegExp(this.filterWords.join("|"), "gi");

  constructor() {}

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

    if (this.searchForm.invalid) {
      this.searchErrors = this.searchForm.controls;

      return;
    }

    this.searchErrors = {};
    this.search.emit(searchInput);
  }
}
