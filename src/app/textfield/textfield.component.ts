import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
})
export class TextfieldComponent implements OnInit {
  @Input() wordCount: number = 0;
  @Input() title: string = `Text area for ${this.wordCount} words`;

  constructor() {}

  ngOnInit(): void {}

  onCopy(text: string, form: any) {
    form.preventDefault();

    navigator.clipboard.writeText(text);
  }

  onDelete(input: HTMLTextAreaElement, event: any) {
    event.preventDefault();

    input.value = '';
  }
}
