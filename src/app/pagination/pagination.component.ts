import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input() maxPages: number;
  @Output() selectPage = new EventEmitter<any>();

  activePage: number;
  pages: number[];

  private offsetPage: number = 5;

  constructor() {}

  ngOnInit() {
    console.log("Max pages", this.maxPages, this.pages);
  }

  ngOnChanges() {
    console.log("Changes", this.maxPages);
    this.pages = [...Array(this.maxPages).keys()];
    this.activePage = 0;
  }

  setPage(page) {
    if (page < 0) {
      this.activePage = 0;
    } else if (page === this.maxPages) {
      this.activePage = this.maxPages - 1;
    } else {
      this.activePage = page;
    }

    console.log("Setpage", page, this.maxPages, this.activePage);
    this.selectPage.emit(this.activePage);
  }
}
