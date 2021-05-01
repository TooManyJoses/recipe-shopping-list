import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output() routeSelected = new EventEmitter();

  onSelect(selection: string) {
    this.routeSelected.emit(selection);
  }
}