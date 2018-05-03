import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../images.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public gallery: any;
  public color: string = '';

  constructor(private is: ImagesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params || !params['album'] || !params['idx']) return;
      switch (params['idx']) {
        case '0':
          this.color = 'green';
          break;
        case '1':
          this.color = 'blue';
          break;
        case '2':
          this.color = 'purple';
          break;
        default:
          this.color = '';
      }
      this.gallery = this.is.gallery(params['album']);
    })
  }
}
