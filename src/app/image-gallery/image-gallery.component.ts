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
}
