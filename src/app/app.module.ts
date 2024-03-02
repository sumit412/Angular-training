import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ExploreComponent } from './common/explore/explore.component';
import { ReviewComponent } from './common/review/review.component';
import { BlogComponent } from './common/blog/blog.component';
import { ContactComponent } from './common/contact/contact.component';
import { ListsComponent } from './common/lists/lists.component';
import { TopAreaComponent } from './common/top-area/top-area.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { WorkComponent } from './common/work/work.component';
import { StatisticsComponent } from './common/statistics/statistics.component';
import { ExplorePageComponent } from './common/explore-page/explore-page.component';
import { MainContentComponent } from './common/main-content/main-content.component';
import { NotFoundComponentComponent } from './common/not-found/not-found-component.component';
import { FacilityCardComponent } from './common/facility-card/facility-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExploreComponent,
    ReviewComponent,
    BlogComponent,
    ContactComponent,
    ListsComponent,
    TopAreaComponent,
    WelcomeComponent,
    WorkComponent,
    StatisticsComponent,
    ExplorePageComponent,
    MainContentComponent,
    NotFoundComponentComponent,
    FacilityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
