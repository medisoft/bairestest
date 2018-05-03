import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AlbumsComponent} from './albums/albums.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
  {path: '', component: AlbumsComponent, pathMatch: 'full'},
  {path: 'gallery/:album/:idx', component: GalleryComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
