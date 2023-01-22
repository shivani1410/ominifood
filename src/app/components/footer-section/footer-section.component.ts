import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent implements OnInit {
  mobileNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  scrollToView(element){
    if(element=="#"){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    if(this.mobileNav){
      this.mobileNav=false
    }

}
}
