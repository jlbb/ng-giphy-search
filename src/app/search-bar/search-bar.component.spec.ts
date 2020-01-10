import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchBarComponent } from "./search-bar.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("SearchBarComponent", () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  let nameInput: HTMLInputElement;
  let button: HTMLInputElement;

  const text: string = "Puppies";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    nameInput = fixture.debugElement.nativeElement.querySelector(
      "form > input"
    );
    button = fixture.debugElement.nativeElement.querySelector(
      'form > button[type="submit"]'
    );
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain in the searchForm the text typed in the input", () => {
    nameInput.value = text;
    nameInput.dispatchEvent(new Event("input"));

    expect(component.searchForm.value.searchString).toEqual(text);
  });

  it("should emit an event with the search word when search button is clicked", () => {
    nameInput.value = text;
    nameInput.dispatchEvent(new Event("input"));

    expect(component.searchForm.value.searchString).toEqual(text);

    component.search.subscribe(searchWord => {
      expect(searchWord).toEqual(text);
    });
    button.click();
  });

  it("should fail when the validation is not passed for the form", () => {
    nameInput.value = "";
    nameInput.dispatchEvent(new Event("input"));

    expect(component.searchForm.value.searchString).toEqual("");

    button.click();

    expect(component.searchForm.invalid).toBe(true);
    expect(Object.keys(component.searchErrors).length).toBeGreaterThan(0);
  });

  it("should show **** when a word from the swear word list is typed", () => {
    nameInput.value = "fool";
    nameInput.dispatchEvent(new Event("input"));
    nameInput.dispatchEvent(new Event("keyup"));

    expect(component.searchForm.value.searchString).toEqual(
      component.hiddenWord
    );
  });
});
