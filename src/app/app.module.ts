import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { HowSectionComponent } from './components/how-section/how-section.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { MealSectionComponent } from './components/meal-section/meal-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialSectionComponent } from './components/testimonial-section/testimonial-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroPageComponent,
    HeaderSectionComponent,
    HowSectionComponent,
    FeaturedSectionComponent,
    MealSectionComponent,
    TestimonialSectionComponent,
    PricingSectionComponent,
    CtaSectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
