import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { HowSectionComponent } from './components/how-section/how-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroPageComponent,
    HeaderSectionComponent,
    HowSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
