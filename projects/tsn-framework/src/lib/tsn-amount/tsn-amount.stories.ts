import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { TsnAmountComponent } from './tsn-amount.component';
import { TsnNumberPipe } from '../shared/pipes/tsn-number/tsn-number.pipe';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<TsnAmountComponent> = {
  title: 'Design System/Tsn Amount',
  component: TsnAmountComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
      providers: [TsnNumberPipe]
    })
  ],
  argTypes: {
    label: { control: 'text', description: 'Label text for the input' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    FormControl: { control: 'object', description: 'Angular FormControl instance' },
    disabled: { control: 'boolean', description: 'Disables the input' },
    readonly: { control: 'boolean', description: 'Sets the input to read-only' },
    required: { control: 'boolean', description: 'Marks the input as required' },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    minLength: { control: 'number', description: 'Minimum length' },
    maxLength: { control: 'number', description: 'Maximum length' },
    pattern: { control: 'text', description: 'Regex pattern for validation' },
    symbol: { control: 'text', description: 'Currency symbol' },
    separator: { control: 'text', description: 'Thousands separator character' },
    currencyCode: { control: 'text', description: 'ISO currency code' },
    currencyName: { control: 'text', description: 'Display name of the currency' },
    fractionName: { control: 'text', description: 'Name of the fractional unit' },
    customHint: { control: 'text', description: 'Custom hint text below input' },
    showWords: { control: 'boolean', description: 'Toggle display of amount in words' },
    allowNegativeNumbers: { control: 'boolean', description: 'Allow negative input values' },
    model: { control: 'object', description: 'Model binding' },
    showCurrency: { control: 'boolean', description: 'Toggle currency display' },
    comboCurrency: { control: 'boolean', description: 'Toggle currency combo mode' },
    field: { control: 'object', description: 'Field configuration object' },
    validationMessage: { control: 'object', description: 'Custom validation messages' },
    showCustomError: { control: 'boolean', description: 'Toggle custom error visibility' },
    change: { description: 'Event emitted when value changes' }
  }
};

export default meta;
type Story = StoryObj<TsnAmountComponent>;

export const Default: Story = {
  args: {
    label: 'Amount',
    placeholder: 'Enter amount'
  }
};

export const WithCurrency: Story = {
  args: {
    label: 'Payment Amount',
    showCurrency: true,
    currencyCode: 'USD'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Read Only Amount',
    disabled: true,
    model: 1000
  }
};

export const RequiredWithHint: Story = {
  args: {
    label: 'Required Amount',
    required: true,
    customHint: 'Please enter the total transaction value'
  }
};
