import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchService } from "./search-bar/search.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchBarComponent,
        ImageGalleryComponent,
        PaginationComponent
      ],
      imports: [HttpClientModule, AppRoutingModule, ReactiveFormsModule],
      providers: [SearchService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
