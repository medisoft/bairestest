import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImagesService {

  constructor(private http: HttpClient) {
  }

  albums() {
    // https://jsonplaceholder.typicode.com/albums
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  gallery(album) {
    // https://jsonplaceholder.typicode.com/photos
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album}`);
  }
}
