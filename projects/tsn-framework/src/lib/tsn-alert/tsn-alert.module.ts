import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TsnAlertComponent} from './tsn-alert.component';
import {NgbAlertModule, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [TsnAlertComponent],
  exports: [
    TsnAlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbAlertModule,
    NgbProgressbarModule,
  ]
})
export class TsnAlertModule {
}
