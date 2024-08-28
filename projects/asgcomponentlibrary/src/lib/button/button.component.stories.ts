import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export const Default = () => ({
  component: ButtonComponent,
  props: {
    label: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
});
