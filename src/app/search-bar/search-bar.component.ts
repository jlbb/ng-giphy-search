import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import swearWordList from "../constants/swearWordList";

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

  hiddenWord: string = "****";
  rgx: RegExp = new RegExp(swearWordList.join("|"), "gi");

  constructor() {}

  ngOnInit() {}

  filterSwearWords() {
    if (this.rgx.test(this.searchForm.value.searchString)) {
      this.searchForm.setValue({
        searchString: this.searchForm.value.searchString.replace(
          this.rgx,
          this.hiddenWord
        )
      });
    }
  }

  submitSearch() {
    const searchInput: string = this.searchForm.value.searchString;

    if (this.searchForm.invalid) {
      this.searchErrors = this.searchForm.controls;

      return;
    }

    this.searchErrors = {};
    this.search.emit(searchInput);
  }
}
