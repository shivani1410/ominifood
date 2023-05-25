import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string=""
  onUpdateName(event:any){
    this.name=event.target.value
    // console.log(event.target)
    console.log(this.name)
  }
}
