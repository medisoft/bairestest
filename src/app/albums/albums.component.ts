import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: any;

  constructor(private is: ImagesService) {
  }

  ngOnInit() {
    this.albums = this.is.albums();
  }

}
