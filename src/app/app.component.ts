import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPage: string = 'recipe';

  onNavigate(navigate: string) {
    this.displayPage = navigate;
  }
}
