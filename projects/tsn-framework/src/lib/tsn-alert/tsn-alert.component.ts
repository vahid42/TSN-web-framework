import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {TsnAlertModel} from "../shared/models/tsnAlert.model";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'tsn-alert',
    templateUrl: './tsn-alert.component.html',
    standalone: false
})
export class TsnAlertComponent implements OnInit,OnDestroy,OnChanges {
  @Input() alert: TsnAlertModel;
  @Output() clickedCustomBtn = new EventEmitter<any>()

  percentageComplete: number;
  progressInterval:any;
  constructor() {
    this.percentageComplete = 0;
  }
  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert;

  ngOnInit(): void {

  }

  close() {
    this.alert = null;
  }

  ngOnDestroy(): void {
    clearInterval(this.progressInterval);
  }
  onAlertClosed(){
    this.alert = null;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.alert && this.alert) {
      if (this.alert.autoClose) {
        if (this.alert.duration === undefined) {
          this.alert.duration = 30;
        }
        this.progressInterval = setInterval(() => {
          this.percentageComplete = this.percentageComplete + 1;
        }, 1000);
        setTimeout(() => this.staticAlert.close(), this.alert.duration * 1000);
      }
    }
  }

  ClickBtn(event:any)
  {
    this.clickedCustomBtn.emit(event);
  }
}tsn-alert.component.ts
