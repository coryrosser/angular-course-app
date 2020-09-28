import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector can be done in multiple ways
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p {
      color: dodgerblue;
    }  
  `]
})
export class AppComponent {
  name = 'CR';
}
