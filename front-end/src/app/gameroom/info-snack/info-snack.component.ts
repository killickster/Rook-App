import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-snack',
  templateUrl: './info-snack.component.html',
  styleUrls: ['./info-snack.component.css']
})
export class InfoSnackComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {

    } else {
      this.visible = false;
    }
  }


  constructor(private eRef: ElementRef) { }

  visible = false;

  ngOnInit(): void {
  }

  openInfo(){
    if(this.visible == false){
      this.visible = true;
    }else{
      this.visible = false;
    }
  }

}
