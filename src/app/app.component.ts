import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2';
  languages: string[] = ['English', 'Bangla', 'Arabic'];
  currencies: string[] = ['USD', 'BDT', 'INR'];
  

receivedMessage: string | undefined;

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}