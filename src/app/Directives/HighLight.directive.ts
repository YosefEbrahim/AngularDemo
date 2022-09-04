import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(public ele:ElementRef){

    this.ele.nativeElement.style.color='red';
    this.ele.nativeElement.style.fontweight='bold';
   }

}
