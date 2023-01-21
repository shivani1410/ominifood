import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
})
export class HeaderSectionComponent implements AfterViewInit {
  mobileNav: boolean = false;
  constructor() {}

  ngAfterViewInit(): void {
    this.addSticky()
  }
  openNav() {
    console.log('logg');
    this.mobileNav = !this.mobileNav;
    console.log(this.mobileNav);
  }
  how:HTMLElement
  scrollToView(element){
    document.getElementById(element)?.scrollIntoView({behavior:"smooth"});
    if(this.mobileNav){
      this.mobileNav=false
    }

}
sticky:boolean=false
addSticky(){
 const sectionHero=document.querySelector('.section-hero')!
  const obs=new IntersectionObserver(entries=>{
console.log(entries[0])
const ent=entries[0]
if(!ent.isIntersecting){
this.sticky=true
// document.body.classList.add("sticky");
}else if(ent.isIntersecting){
  // document.body.classList.remove("sticky")
  this.sticky=false
}
  },{
    root:null,
    threshold:0,
    rootMargin:"-80px"
  })
  obs.observe(sectionHero)
}
}
