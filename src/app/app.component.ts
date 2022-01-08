import { Component } from '@angular/core';
import { InputType } from './data/dtos/Input.type';
import { InputData } from './data/input.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ellie-form-fill';

  data: InputType[] = InputData;

  textnumber: number = 6;
}
