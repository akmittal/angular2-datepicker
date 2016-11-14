import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ng2-bootstrap/components/timepicker/timepicker.module';
import { MyDatePicker } from './my-date-picker.component';


@NgModule({
    imports: [
        TimepickerModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        MyDatePicker,
    ],
    exports: [MyDatePicker],
})
export class MyDatePickerModule {

}
