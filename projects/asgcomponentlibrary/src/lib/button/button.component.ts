import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button (click)="handleClick()">{{ label }}</button>`,
  styles: [`button { font-size: 16px; }`]
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() onClick: () => void = () => {};

  handleClick() {
    this.onClick();
  }
}
