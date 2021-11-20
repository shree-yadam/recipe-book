import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {
  @HostBinding('class.open') clicked: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2){  }

  @HostListener('click') dropDown(eventData: Event) {
    this.clicked = !this.clicked;
  }

}
