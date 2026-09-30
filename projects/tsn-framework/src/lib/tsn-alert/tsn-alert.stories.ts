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
      description: 'The configuration model for the alert containing message, type, dismissible, autoClose, duration, showCustomBtn, customBtnTitle, and customBtnType.'
    },
    clickedCustomBtn: {
      description: 'Event emitted when the custom button inside the alert is clicked.'
    }
  }
};

export default meta;
type Story = StoryObj<TsnAlertComponent>;

export const Success: Story = {
  args: {
    alert: {
      message: 'Operation completed successfully!',
      type: 'success',
      dismissible: true
    }
  }
};

export const WarningWithButton: Story = {
  args: {
    alert: {
      message: 'Warning: Your session is about to expire.',
      type: 'warning',
      showCustomBtn: true,
      customBtnTitle: 'Extend Session',
      customBtnType: 'btn-primary'
    }
  }
};

export const DangerAutoClose: Story = {
  args: {
    alert: {
      message: 'An error occurred. Closing in 30 seconds.',
      type: 'danger',
      autoClose: true,
      duration: 30
    }
  }
};

export const NonDismissible: Story = {
  args: {
    alert: {
      message: 'This is a persistent alert that cannot be dismissed.',
      type: 'info',
      dismissible: false
    }
  }
};
