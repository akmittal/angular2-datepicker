import {IMyDayLabels} from "./my-day-labels.interface";
import {IMyMonthLabels} from "./my-month-labels.interface";
import {IMyDate} from "./my-date.interface";

export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    todayBtnTxt?: string;
    firstDayOfWeek?: string;
    sunHighlight?: boolean;
    disabledUntil?: IMyDate;
    disabledSince?: IMyDate;
    disableWeekends?: boolean;
    height?: string;
    width?: string;
    inline?: boolean;
}