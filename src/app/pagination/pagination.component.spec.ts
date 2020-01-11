import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PaginationComponent } from "./pagination.component";
import { By } from "@angular/platform-browser";
import { SimpleChange } from "@angular/core";

describe("PaginationComponent", () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  let paginationElem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    paginationElem = fixture.debugElement.nativeElement.querySelector(
      "ul.pagination-container"
    );
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not render the element if it doesn't have a maxPages input", () => {
    expect(paginationElem).toBeFalsy();
  });

  it("should not change page when is only one page, or it's an edge and there is no more prev/next pages", () => {
    component.maxPages = 1;
    fixture.detectChanges();

    component.ngOnChanges();

    const nextPage = fixture.debugElement.nativeElement.querySelector(
      "li.next-page"
    );
    const previousPage = fixture.debugElement.nativeElement.querySelector(
      "li.previous-page"
    );
    const firstPage = fixture.debugElement.nativeElement.querySelector(
      "li.first-page"
    );
    const lastPage = fixture.debugElement.nativeElement.querySelector(
      "li.last-page"
    );

    nextPage.click();
    expect(component.activePage).toBe(0);

    previousPage.click();
    expect(component.activePage).toBe(0);

    firstPage.click();
    expect(component.activePage).toBe(0);

    lastPage.click();
    expect(component.activePage).toBe(0);
  });

  it("should update to the current page clicked. Emit an event when page is updated", () => {
    component.maxPages = 3;

    component.ngOnChanges();
    fixture.detectChanges();

    const selectedPage = fixture.debugElement.nativeElement.querySelectorAll(
      "li.page-item"
    )[2];

    component.selectPage.subscribe(selectedPage => {
      expect(selectedPage).toEqual(2);
    });

    selectedPage.click();

    expect(component.activePage).toBe(2);
  });

  it("should update the active page when the button for next page is clicked. Not pass the last page when is the current active", () => {
    component.maxPages = 3;
    component.activePage = 0;
    fixture.detectChanges();

    const currPage = component.activePage;

    const nextPage = fixture.debugElement.nativeElement.querySelector(
      "li.next-page"
    );
    nextPage.click();

    expect(component.activePage).toBe(currPage + 1);
  });

  it("should update the active page when the button for previous page is clicked. Not pass the first page when is the current active", () => {
    component.maxPages = 3;
    component.activePage = 2;
    fixture.detectChanges();

    const currPage = component.activePage;

    const prevPage = fixture.debugElement.nativeElement.querySelector(
      "li.previous-page"
    );

    prevPage.click();

    expect(component.activePage).toBe(currPage - 1);
  });

  it("should set the maximum page when last page button is clicked", () => {
    component.maxPages = 2;
    component.activePage = 0;
    fixture.detectChanges();

    const lastPage = fixture.debugElement.nativeElement.querySelector(
      "li.last-page"
    );

    lastPage.click();

    expect(component.activePage).toBe(component.maxPages - 1);
  });

  it("should set the first page when first page button is clicked", () => {
    component.maxPages = 2;
    component.activePage = 0;
    fixture.detectChanges();

    const firstPage = fixture.debugElement.nativeElement.querySelector(
      "li.first-page"
    );

    firstPage.click();

    expect(component.activePage).toBe(0);
  });
});
