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
  scrollToView(element){
    if(element=="#"){
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    document.getElementById(element)?.scrollIntoView({behavior:"smooth"});
    if(this.mobileNav){
      this.mobileNav=false
    }

}
sticky:boolean=false
addSticky(){
 const sectionHero=document.querySelector('.section-hero')!
  const obs=new IntersectionObserver(entries=>{
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
