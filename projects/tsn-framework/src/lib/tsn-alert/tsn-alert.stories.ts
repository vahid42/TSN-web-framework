import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { TsnAlertComponent } from './tsn-alert.component';
import { TsnAlertModule } from './tsn-alert.module';

const meta: Meta<TsnAlertComponent> = {
  title: 'Design System/Tsn Alert',
  component: TsnAlertComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [TsnAlertModule],
    }),
  ],
  argTypes: {
    alert: {
      control: 'object',
      description: 'The configuration model for the alert containing type, message, duration, etc.',
    },
    clickedCustomBtn: {
      action: 'clickedCustomBtn',
      description: 'Event emitted when the custom button is clicked.',
    },
  },
  args: {
    alert: {
      type: 'success',
      message: 'Operation completed successfully!',
      dismissible: true,
      showCustomBtn: false,
    },
  },
};

export default meta;
type Story = StoryObj<TsnAlertComponent>;

export const Success: Story = {
  args: {
    alert: {
      type: 'success',
      message: 'Your changes have been saved.',
      dismissible: true,
    },
  },
};

export const WarningWithButton: Story = {
  args: {
    alert: {
      type: 'warning',
      message: 'Are you sure you want to proceed?',
      dismissible: false,
      showCustomBtn: true,
      customBtnTitle: 'Confirm',
      customBtnType: 'btn-warning',
    },
  },
};

export const DangerAutoClose: Story = {
  args: {
    alert: {
      type: 'danger',
      message: 'An error occurred. Closing in 5 seconds.',
      autoClose: true,
      duration: 5,
      dismissible: true,
    },
  },
};
