import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  providers: [SearchService],
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    searchString: new FormControl("cats")
  });
  inputText: FormControl = new FormControl("Reactive form control", [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  submitSearch() {
    const searchInput = this.searchForm.value.searchString;
    console.log("Submitting search", searchInput, this.searchService);

    this.searchService.searchGiphy(searchInput).subscribe(giphies => {
      console.log("Giphies", giphies);
    });
  }
}
