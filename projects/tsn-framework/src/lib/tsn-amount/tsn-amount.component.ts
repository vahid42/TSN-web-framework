import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {AbstractControl, FormControl,} from "@angular/forms";
import {getCurrencySymbol, getNumberOfCurrencyDigits} from "@angular/common";
import {TsnNumberPipe} from "../shared/pipes/tsn-number/tsn-number.pipe";
import {IdGenerator} from "../shared/id-generato/id-generator";


@Component({
  selector: 'tsn-amount',
  templateUrl: './tsn-amount.component.html',
  styleUrls: ['./tsn-amount.component.scss'],
  standalone: false
})
export class TsnAmountComponent implements OnInit, OnChanges {
  localLang = localStorage.getItem('banco-locale') || 'fa';
  @Input() label = 'FRAMEWORK.AMOUNT.AMOUNT';
  @Input() placeholder = 'FRAMEWORK.AMOUNT.VALUE';
  @Input() FormControl: FormControl | AbstractControl;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() min: number;
  @Input() max: number;
  @Input() minLength: number;
  @Input() maxLength: number;
  @Input() pattern: string | RegExp;
  @Input() symbol;
  @Input() separator = ',';
  @Input() currencyCode;
  @Input() currencyName;
  @Input() fractionName: string;
  @Input() customHint: string;
  @Input() showWords = true;
  @Input() allowNegativeNumbers = true;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Input() model: any;
  @Input() showCurrency = false;
  @Input() comboCurrency = false;
  @Input() field: any;
  @Input() validationMessage: any;
  @Input() showCustomError: boolean = false;
  currencyDigits = 0;
  mask = 'separator';
  showCustomHint = true;
  separatorCount = 0;
  object = Object
  inputBlurred = false;
  rawValue: string | number = ''
  inputElement: ElementRef;
  standardErrors = [
    'required',
    'maxLength',
    'minlength',
    'pattern',
    'max',
    'min'
  ]
  resetInput: boolean = true;
  inputId = IdGenerator.makeId(10)


  constructor(private tsnNumber: TsnNumberPipe,
              @Optional() @Inject('config') private config?: any) {
    this.currencyCode = this.setDefaultCurrencyCode();
    if (this.showCurrency) {
      if (this.currencyCode) {
        this.currencyDigits = getNumberOfCurrencyDigits(this.currencyCode);
        this.mask = `separator.${this.currencyDigits}`;
        this.symbol = this.setDefaultCurrencySymbol(this.currencyCode);
        if (this.currencyCode === 'IRR') {
          this.currencyName = this.setDefaultCurrencyName();
        }
      }
    } else {
      this.showWords = false;
    }

  }

  ngOnInit(): void {
    if (this.FormControl) {
      this.FormControl.valueChanges.subscribe(value => {
        const element = document.getElementById(this.inputId);
        if (element) {
          this.inputElement = new ElementRef(element);
        }
        if (this.inputElement && value !== this.unformatNumber(this.inputElement?.nativeElement.value)) {
          this.inputElement.nativeElement.value = this.formatNumber(value)
        }
        if (this.FormControl && this.FormControl.value && typeof this.FormControl.value === 'string' && this.FormControl.value.includes(this.separator)) {
          this.FormControl?.setValue(this.unformatNumber(this.FormControl.value));
        } else if (this.FormControl && this.FormControl.value && typeof this.FormControl.value === 'number') {
          this.FormControl?.setValue(this.tsnNumber.transform(this.FormControl.value, {separator: false}));
        }
      })
    }
    this.showCustomHint = !this.FormControl?.value;
  }

  onChange(event: any) {
    if (!event && !this.FormControl?.touched) {
      this.FormControl?.markAsPristine();
    }

    if (event) {
      this.FormControl?.markAsDirty();
    }

    this.showCustomHint = !event && !this.FormControl?.value;

  }


  ngOnChanges(changes: SimpleChanges): void {

    if (changes && changes['showWords']) {
      if (this.showWords === undefined) {
        this.showWords = true;
      }
    }

    if (changes && changes['allowNegativeNumbers']) {
      if (this.allowNegativeNumbers === undefined) {
        this.allowNegativeNumbers = true;
      }
    }

    if (changes && changes['separator']) {
      if (!this.separator) {
        this.separator = ',';
      }
    }

    if (changes && changes['currencyCode']) {
      if (this.currencyCode && this.currencyCode === 'IRR') {
        this.symbol = this.setDefaultCurrencySymbol(this.currencyCode);
        this.controlCurrencyDigits();
      } else if (this.currencyCode) {
        this.symbol = getCurrencySymbol(this.currencyCode, 'narrow');
        this.controlCurrencyDigits();
      }
    }

    if (changes && changes['symbol']) {
      if (!this.symbol) {
        this.symbol = this.setDefaultCurrencySymbol(this.currencyCode);
      }
    }

    if (changes && changes['model']) {
      if (this.model && typeof this.model === 'string' && this.model.includes(this.separator)) {
        this.FormControl?.setValue(this.unformatNumber(this.model));
      } else if (this.model) {
        this.FormControl?.setValue(this.model)
      }
    }

    if (changes && changes['currencyName']) {
      if (!this.currencyName) {
        this.currencyName = this.setDefaultCurrencyName();
      }
    }

    if (changes && changes['showCurrency']) {
      if (this.showCurrency) {
        if (this.currencyCode) {
          this.currencyDigits = getNumberOfCurrencyDigits(this.currencyCode);
          this.mask = `separator.${this.currencyDigits}`;
          this.symbol = this.setDefaultCurrencySymbol(this.currencyCode);
          this.showWords = true;
          if (this.currencyCode === 'IRR') {
            this.currencyName = this.setDefaultCurrencyName();
          }
        } else {
          this.currencyCode = this.setDefaultCurrencyCode();
          this.symbol = this.setDefaultCurrencySymbol(this.currencyCode);
          this.controlCurrencyDigits();
          if (this.currencyCode === 'IRR') {
            this.currencyName = this.setDefaultCurrencyName();
          }
        }
      } else {
        this.showWords = false;
      }
    }

    if (changes && changes['maxLength']) {
      if (this.maxLength) {
        this.maxLength = Number(this.maxLength)
      }
    }

    if (changes && changes['minLength']) {
      if (this.minLength) {
        this.minLength = Number(this.minLength)
      }
    }

    if (changes && changes['FormControl']) {
      if (this.FormControl && this.FormControl.value && typeof this.FormControl.value === 'string' && this.FormControl.value.includes(this.separator)) {
        this.FormControl.setValue(this.unformatNumber(this.FormControl.value));
      }
      this.showCustomHint = !this.FormControl?.value;
    }

  }

  setDefaultCurrencySymbol(currencyCode: string): string {
    return currencyCode === 'IRR' ?
      (this.localLang === 'fa' ? 'ریال' : 'Rials') :
      getCurrencySymbol(currencyCode, 'narrow');
  }

  setDefaultCurrencyName(): string {
    return this.localLang === 'fa' ? 'ریال' : 'Rials';
  }

  setDefaultCurrencyCode(): string {
    return this.config?.defaultCurrency;
  }

  controlCurrencyDigits() {
    this.resetInput = false;
    this.currencyDigits = getNumberOfCurrencyDigits(this.currencyCode);
    this.mask = `separator.${this.currencyDigits}`;
    setTimeout(() => {
      this.resetInput = true;
    })
  }

  private formatNumber(value: any): string | number {
    if (!value || value === '') {
      return ''
    }
    return this.tsnNumber.transform(value);
  }

  private unformatNumber(value: string): string | number {
    if (!value || value === '') {
      return '';
    }
    if (typeof value === 'string') {
      return value.replace(/,/g, '');
    } else {
      return this.tsnNumber.transform(value, {separator: false});
    }

  }

  onInput(event: any): void {
    const value = event.target.value;
    this.rawValue = this.unformatNumber(value);
    if (event.data == '*' && this.rawValue) {
      this.rawValue = `${this.rawValue}` + '000';
    }

    if (value && typeof value === 'string' && value.includes(this.separator)) {
      if (value.length > 4) {
        this.separatorCount = Number(Math.floor((value.length - 1) / 4));
      }
    }

    if (this.rawValue && typeof this.rawValue === 'string' && this.rawValue.length && this.rawValue.length > this.maxLength) {
      return;
    }

    this.FormControl.setValue(this.rawValue, {emitEvent: true});
    this.FormControl.updateValueAndValidity();
    this.showCustomHint = !value && !this.FormControl?.value;
    this.onChange(this.rawValue);
    this.change.emit(this.rawValue);

  }

  onBlur() {
    if (this.FormControl && this.FormControl.value && typeof this.FormControl.value === 'string' && this.FormControl.value.includes(this.separator)) {
      this.FormControl?.setValue(this.unformatNumber(this.FormControl.value));
    }
    this.showCustomHint = !this.FormControl?.value;
    this.inputBlurred = true;
  };

  get onlyStandardErrors(): boolean {
    if (!this.FormControl?.errors) {
      return false;
    }
    const errorKeys = Object.keys(this.FormControl.errors);
    return errorKeys.some(key => {
      return this.standardErrors.includes(key)
    })
  }
}
