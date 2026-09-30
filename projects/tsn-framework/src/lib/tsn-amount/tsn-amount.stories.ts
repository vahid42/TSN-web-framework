import { Meta, StoryObj, moduleMetadata } from '@storybook/angular-vite';
import { TsnAmountComponent } from './tsn-amount.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TsnNumberPipe } from '../shared/pipes/tsn-number/tsn-number.pipe';

const meta: Meta<TsnAmountComponent> = {
  title: 'Design System/Amount Input',
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
    readonly: { control: 'boolean', description: 'Sets input to read-only' },
    required: { control: 'boolean', description: 'Marks the input as required' },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    minLength: { control: 'number', description: 'Minimum length' },
    maxLength: { control: 'number', description: 'Maximum length' },
    pattern: { control: 'text', description: 'Regex pattern for validation' },
    symbol: { control: 'text', description: 'Currency symbol' },
    separator: { control: 'text', description: 'Thousands separator character' },
    currencyCode: { control: 'text', description: 'ISO currency code' },
    currencyName: { control: 'text', description: 'Name of the currency' },
    fractionName: { control: 'text', description: 'Name of the fraction unit' },
    customHint: { control: 'text', description: 'Custom hint text below input' },
    showWords: { control: 'boolean', description: 'Toggle display of amount in words' },
    allowNegativeNumbers: { control: 'boolean', description: 'Allow negative values' },
    model: { control: 'object', description: 'Model binding' },
    showCurrency: { control: 'boolean', description: 'Toggle currency display' },
    comboCurrency: { control: 'boolean', description: 'Enable currency combo' },
    field: { control: 'object', description: 'Field configuration object' },
    validationMessage: { control: 'object', description: 'Custom validation messages' },
    showCustomError: { control: 'boolean', description: 'Toggle custom error display' },
    change: { description: 'Event emitted when value changes' }
  },
  args: {
    label: 'Amount',
    placeholder: 'Enter amount',
    disabled: false,
    readonly: false,
    required: false,
    showWords: true,
    allowNegativeNumbers: true,
    showCurrency: false,
    separator: ','
  }
};

export default meta;
type Story = StoryObj<TsnAmountComponent>;

export const Default: Story = {};

export const RequiredWithHint: Story = {
  args: {
    required: true,
    customHint: 'Please enter the total transaction amount.'
  }
};

export const CurrencyMode: Story = {
  args: {
    showCurrency: true,
    currencyCode: 'USD',
    label: 'Payment Amount'
  }
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    label: 'Read Only Amount'
  }
};
