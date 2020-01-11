import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.scss"]
})
export class ImageGalleryComponent implements OnInit {
  @Input() images: any[];

  constructor() {}

  ngOnInit() {}

  copyLink(img) {
    navigator.clipboard.writeText(
      (img.images.preview_webp && img.images.preview_webp.url) ||
        (img.images.fixed_height_small && img.images.fixed_height_small.webp)
    );
  }
}
