import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
})
export class HeaderSectionComponent implements OnInit {
  mobileNav: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  openNav() {
    console.log('logg');
    this.mobileNav = !this.mobileNav;
    console.log(this.mobileNav);
  }
}
