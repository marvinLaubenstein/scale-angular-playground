import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Scale + Angular';
  display = false;
  onPress() {
    this.display = true;
    /*if you want the component to show and hide on click pressed, use 
    use this line
    this.display = !this.display;*/
  }
}
