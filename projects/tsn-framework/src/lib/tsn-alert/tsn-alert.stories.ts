import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { TsnAlertComponent } from './tsn-alert.component';
import { TsnAlertModule } from './tsn-alert.module';

const meta: Meta<TsnAlertComponent> = {
  title: 'Design System/Alert',
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
      description: 'Alert configuration model containing type, message, dismissible options, and custom button settings.',
    },
    clickedCustomBtn: {
      action: 'clickedCustomBtn',
      description: 'Event emitted when the custom button inside the alert is clicked.',
    },
  },
  args: {
    alert: {
      type: 'success',
      message: 'This is a successful alert message.',
      dismissible: true,
      autoClose: false,
      duration: 30,
      showCustomBtn: false,
      customBtnTitle: 'Action',
      customBtnType: 'btn-primary',
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
      autoClose: false,
      duration: 30,
      showCustomBtn: false,
      customBtnTitle: '',
      customBtnType: '',
    },
  },
};

export const WarningWithButton: Story = {
  args: {
    alert: {
      type: 'warning',
      message: 'Please review your account details.',
      dismissible: true,
      autoClose: false,
      duration: 30,
      showCustomBtn: true,
      customBtnTitle: 'Review',
      customBtnType: 'btn-warning',
    },
  },
};

export const DangerAutoClose: Story = {
  args: {
    alert: {
      type: 'danger',
      message: 'An error occurred while saving changes.',
      dismissible: true,
      autoClose: true,
      duration: 5,
      showCustomBtn: false,
      customBtnTitle: '',
      customBtnType: '',
    },
  },
};

export const NonDismissible: Story = {
  args: {
    alert: {
      type: 'success',
      message: 'This alert cannot be manually dismissed and requires action.',
      dismissible: false,
      autoClose: false,
      duration: 30,
      showCustomBtn: true,
      customBtnTitle: 'Details',
      customBtnType: 'btn-secondary',
    },
  },
};
