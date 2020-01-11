import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageGalleryComponent } from "./image-gallery.component";

describe("ImageGalleryComponent", () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should not render image gallery when doesn't have input images", () => {
    const galleryElem: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      ".img-container"
    );

    expect(galleryElem).toBeFalsy();
  });

  it("should render a not found element when the set of images is empty", () => {
    component.images = [];
    fixture.detectChanges();

    const galleryElem: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      ".not-found"
    );

    expect(galleryElem).toBeTruthy();
  });

  it("should render images given a non-empty set of images", () => {
    const url1: string = "test1.webp";
    const url2: string = "test2.webp";

    component.images = [
      {
        images: {
          preview_webp: {
            url: url1
          }
        }
      },
      {
        images: {
          preview_webp: {
            url: url2
          }
        }
      }
    ];
    fixture.detectChanges();

    const galleryElem: HTMLImageElement = fixture.debugElement.nativeElement.querySelectorAll(
      ".img-container > img"
    );

    expect(galleryElem).toBeTruthy();
    expect(galleryElem[0].src).toContain(url1);
    expect(galleryElem[1].src).toContain(url2);
  });
});
