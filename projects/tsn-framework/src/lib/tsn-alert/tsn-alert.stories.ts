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
      description: 'The configuration model for the alert containing type, message, and behavior settings.',
    },
    clickedCustomBtn: {
      action: 'clickedCustomBtn',
      description: 'Event emitted when the custom action button is clicked.',
    },
  },
};

export default meta;
type Story = StoryObj<TsnAlertComponent>;

export const Success: Story = {
  args: {
    alert: {
      type: 'success',
      message: 'Operation completed successfully!',
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
    },
  },
};

export const Info: Story = {
  args: {
    alert: {
      type: 'info',
      message: 'This is an informational alert.',
      dismissible: true,
    },
  },
};
