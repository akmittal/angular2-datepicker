import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TimepickerActions,
  TimepickerConfig,
  TimepickerModule,
} from 'ngx-bootstrap/timepicker';
import { MyDatePicker } from './my-date-picker.component';

@NgModule({
  imports: [TimepickerModule, CommonModule, FormsModule],
  declarations: [MyDatePicker],
  exports: [MyDatePicker],
  providers: [TimepickerConfig, TimepickerActions],
})
export class MyDatePickerModule {}
