import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  template: `<button (click)="handleClick()">{{ label }}</button>`,
  standalone: true,
  styles: [`button { font-size: 16px; }`],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() onClick: () => void = () => {};

  handleClick() {
    this.onClick();
  }
}
