import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from "@angular/common/http/testing";

import { GiphyService } from "./giphy.service";

describe("GiphyService", () => {
  const mockGiphies: any = {
    data: [
      {
        type: "gif",
        id: "l2SpLKjTKEBhYqbbq",
        url:
          "https://giphy.com/gifs/studiosoriginals-dog-puppies-l2SpLKjTKEBhYqbbq",
        slug: "studiosoriginals-dog-puppies-l2SpLKjTKEBhYqbbq",
        bitly_gif_url: "https://gph.is/2dxCIBv",
        bitly_url: "https://gph.is/2dxCIBv",
        embed_url: "https://giphy.com/embed/l2SpLKjTKEBhYqbbq",
        username: "studiosoriginals",
        source: "",
        title: "dog hang ten GIF by GIPHY Studios Originals",
        rating: "g",
        content_url: "",
        source_tld: "",
        source_post_url: "",
        is_sticker: 0,
        import_datetime: "2016-09-29 17:23:14",
        trending_datetime: "2017-03-29 20:00:19",
        images: {
          preview_webp: {
            height: "146",
            size: "22430",
            url:
              "https://media3.giphy.com/media/j3mIdS3PMvKVi/giphy-preview.webp",
            width: "176"
          }
        }
      },
      {}
    ],
    pagination: {
      total_count: 1,
      count: 1,
      offset: 0
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it("should be created", () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });

  it("should return a giphy search result object of images", inject(
    [HttpTestingController, GiphyService],
    (httpMock: HttpTestingController, giphyService: GiphyService) => {
      giphyService.searchGiphy("test").subscribe(searchResults => {
        expect(searchResults).toEqual(mockGiphies);
      });

      let req: TestRequest = httpMock.expectOne(req => {
        expect(req.url).toEqual(giphyService.apiURL);
        return true;
      });

      expect(req.request.url).toEqual(giphyService.apiURL);

      req.flush(mockGiphies);
      httpMock.verify();
    }
  ));
});
