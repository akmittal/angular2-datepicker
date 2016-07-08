import {IMyDate} from "./my-date.interface";

export interface IMyWeek {
    dateObj: IMyDate;
    cmo: number;
    currDay: boolean;
    dayNbr: number;
    disabled: boolean;
}