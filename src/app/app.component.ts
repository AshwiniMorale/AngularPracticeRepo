import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //inline css applied here for h3
  styles: [` 
      h3{
        color: red;
      }
  `]
})
export class AppComponent {
  name = 'anguarfirstApp';
}
