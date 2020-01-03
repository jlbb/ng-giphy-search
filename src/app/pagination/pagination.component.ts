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

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
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

    this.selectPage.emit(this.activePage);
  }
}
