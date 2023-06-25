import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello {{title}}</h1>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageHeader: string = 'Employee Details';
  fullName: string = 'John Doe'
  isDisabled: boolean = true;
  classToApply: string = 'boldClass italicClass'
  applyAllClass: string = 'boldClass italicClass colorClass'
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;

  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  name: string = 'Tom'

  userText: string = 'Pragim';




  getFullName(): string {
    return this.fullName;
  }

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicsClass
    };
    return classes;
  }

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    }

    return styles
  }

  onClick(): void {
    console.log('Button click')
  }
}
