import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
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

  constructor() {}

  ngOnInit() {}
}
