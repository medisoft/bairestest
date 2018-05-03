import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AlbumsComponent} from './albums/albums.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImagesService} from './images.service';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
