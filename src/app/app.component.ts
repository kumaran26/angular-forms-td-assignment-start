import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSelected: string = 'Advanced';

  submitForm(formObject){
    console.log('form data', formObject);
  }

}
