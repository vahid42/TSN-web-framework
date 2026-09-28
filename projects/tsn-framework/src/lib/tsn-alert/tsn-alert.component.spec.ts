import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TsnAlertComponent} from './tsn-alert.component';
import {TsnAlertTypes} from "../shared/enums/tsn-alert-types.enum";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../core/extentions/translationHttpLoaderFactory";
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe('TsnAlertComponent', () => {
  let component: TsnAlertComponent;
  let fixture: ComponentFixture<TsnAlertComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TsnAlertComponent],
    imports: [TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            isolate: true,
            extend: true
        })],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsnAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('modal should be closed ', () => {
    component.close();
    expect(component.alert).toEqual(null)
  });
  it('button should be created', () => {
    expect(fixture.nativeElement.querySelector('[data-test="ngbAlert"]')).toBeFalsy();
  });

  it('call ngOnChanges with duration null ', () => {
    component.alert = {type:TsnAlertTypes.Danger, message:'Hi', autoClose: true}
    component.ngOnChanges(<any>{alert :component.alert})
    expect(component.alert.duration).toEqual(30)
  });
  it('button should be created', () => {
    component.alert = {type:TsnAlertTypes.Success,message:''}
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('[data-test="ngbAlert"]')).toBeTruthy();
  });
});
