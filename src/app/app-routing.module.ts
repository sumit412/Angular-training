import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './common/blog/blog.component';
import { ExploreComponent } from './common/explore/explore.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { WorkComponent } from './common/work/work.component';
import { ReviewComponent } from './common/review/review.component';
import { ContactComponent } from './common/contact/contact.component';
import { NotFoundComponentComponent } from './common/not-found/not-found-component.component';
import { MainContentComponent } from './common/main-content/main-content.component';

const routes: Routes = [
  {
    // lazy loading
    path : 'movie-app',
    loadChildren : () => import('./common/modules/movie-app/movie-app.module').then(m => m.MovieAppModule)
  },
  { path : 'main', component : MainContentComponent },
  { path : 'works', component : WorkComponent },
  { path : 'explore', component : ExploreComponent },
  { path : 'review', component : ReviewComponent },
  { path : 'blog', component : BlogComponent },
  { path : 'contact', component : ContactComponent },
  { path : '', component : WelcomeComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' }, // http://localhost:4200 or http://kanika.io/
  {  path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
