import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { TsnAmountComponent } from './tsn-amount.component';

const meta: Meta<TsnAmountComponent> = {
  title: 'Design System/Tsn Amount',
  component: TsnAmountComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [TsnAmountComponent],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the amount input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the amount input',
    },
    FormControl: {
      control: 'object',
      description: 'Form control associated with the amount input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input field',
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the input field readonly',
    },
    required: {
      control: 'boolean',
      description: 'Marks the input field as required',
    },
    min: {
      control: 'number',
      description: 'Minimum value allowed',
    },
    max: {
      control: 'number',
      description: 'Maximum value allowed',
    },
    minLength: {
      control: 'number',
      description: 'Minimum length allowed',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length allowed',
    },
    pattern: {
      control: 'text',
      description: 'Validation pattern for the input',
    },
    symbol: {
      control: 'text',
      description: 'Currency symbol to display',
    },
    separator: {
      control: 'text',
      description: 'Separator character for numbers',
    },
    currencyCode: {
      control: 'text',
      description: 'Currency code (e.g. IRR)',
    },
    currencyName: {
      control: 'text',
      description: 'Currency name to display',
    },
    fractionName: {
      control: 'text',
      description: 'Fraction name for currency',
    },
    customHint: {
      control: 'text',
      description: 'Custom hint message',
    },
    showWords: {
      control: 'boolean',
      description: 'Shows amount in words',
    },
    allowNegativeNumbers: {
      control: 'boolean',
      description: 'Allows negative numbers input',
    },
    model: {
      control: 'object',
      description: 'Model value',
    },
    showCurrency: {
      control: 'boolean',
      description: 'Shows currency information',
    },
    comboCurrency: {
      control: 'boolean',
      description: 'Enables currency combo options',
    },
    field: {
      control: 'object',
      description: 'Field configuration object',
    },
    validationMessage: {
      control: 'object',
      description: 'Custom validation messages',
    },
    showCustomError: {
      control: 'boolean',
      description: 'Shows custom error messages',
    },
    change: {
      action: 'change',
      description: 'Emitted when the amount value changes',
    },
  },
  args: {
    label: 'FRAMEWORK.AMOUNT.AMOUNT',
    placeholder: 'FRAMEWORK.AMOUNT.VALUE',
    disabled: false,
    readonly: false,
    required: false,
    showWords: true,
    allowNegativeNumbers: true,
    showCurrency: false,
    comboCurrency: false,
    showCustomError: false,
    separator: ',',
  },
};

export default meta;
type Story = StoryObj<TsnAmountComponent>;

export const Default: Story = {};

export const WithCurrency: Story = {
  args: {
    showCurrency: true,
    currencyCode: 'IRR',
    showWords: true,
    label: 'Amount in IRR',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Amount Input',
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    label: 'Readonly Amount Input',
    model: '1000000',
  },
};
