import {Component, OnInit} from '@angular/core';
import {MyDatePicker} from '../my-date-picker/index';

declare var require;
const styles: string = require('./sample-date-app.component.scss');
const template: string = require('./sample-date-app.component.html');

@Component({
    selector: 'sample-date-picker',
    directives: [MyDatePicker],
    styles: [styles],
    template
})

export class SampleDateApp implements OnInit {
    selectedDate1:string = ''; 
    private myDatePickerOptions1 = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd.mm.yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        disableUntil: {year: 0, month: 0, day: 0},
        //disableSince: {year: 2016, month: 6, day: 26},
        //disableWeekends: true
    };
    
    private myDatePickerOptions2 = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: true
    };
    selectedDate2: string = '2015-04-24';

    constructor() {
        let date = new Date();

        this.selectedDate1 = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '.' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();

        // Disable dates from 5th backward
        date.setDate(date.getDate() - 5);
        this.myDatePickerOptions1.disableUntil = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
    }

    ngOnInit() {
        console.log('onInit(): SampleDatePicker')
    }

    onDateChanged1(event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);  
    }
    
    onDateChanged2(event) {
        console.log('onDateChanged2(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);  
    }
}
