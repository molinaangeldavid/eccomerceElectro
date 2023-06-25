import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() productBy: EventEmitter<string> = new EventEmitter<string>();

  isMenuCollapsed = true;

  collapsed = true;

  sendTypeOfProduct(value: string){
    this.productBy.emit(value)
  }

}
