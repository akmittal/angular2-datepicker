System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var styles, template, MyDatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            styles = 'app/css/mydatepicker.css';
            template = 'app/template/mydatepicker.html';
            MyDatePicker = (function () {
                function MyDatePicker(elem) {
                    var _this = this;
                    this.elem = elem;
                    this.dateChanged = new core_1.EventEmitter();
                    this.showSelector = false;
                    this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 0 };
                    this.defaultDate = { year: 0, month: 0, day: 0 };
                    this.selectedDate = { year: 0, month: 0, day: 0 };
                    this.weekDays = [];
                    this.dates = [];
                    this.selectionDayTxt = '';
                    this.dayIdx = 0;
                    this.today = null;
                    this.PREV_MONTH = 1;
                    this.CURR_MONTH = 2;
                    this.NEXT_MONTH = 3;
                    this.dayLabels = { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' };
                    this.monthLabels = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
                    this.dateFormat = 'yyyy-mm-dd';
                    this.todayBtnTxt = 'Today';
                    this.firstDayOfWeek = 'mo';
                    this.sunHighlight = true;
                    this.height = '34px';
                    this.width = '100%';
                    this._locales = {
                        'ja': {
                            dayLabels: { su: '日', mo: '月', tu: '火', we: '水', th: '木', fr: '金', sa: '土' },
                            monthLabels: { 1: '１月', 2: '２月', 3: '３月', 4: '４月', 5: '５月', 6: '６月',
                                7: '７月', 8: '８月', 9: '９月', 10: '１０月', 11: '１１月', 12: '１２月' },
                            dateFormat: "yyyy.mm.dd",
                            todayBtnTxt: '今日',
                            sunHighlight: false
                        }
                    };
                    this.today = new Date();
                    var doc = document.getElementsByTagName('html')[0];
                    doc.addEventListener('click', function (event) {
                        if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                            _this.showSelector = false;
                        }
                    }, false);
                }
                MyDatePicker.prototype.ngOnInit = function () {
                    var localeOptions = {};
                    if (this.locale && this._locales.hasOwnProperty(this.locale)) {
                        localeOptions = this._locales[this.locale];
                    }
                    var optionprops = ['dayLabels', 'monthLabels', 'dateFormat', 'todayBtnTxt',
                        'firstDayOfWeek', 'sunHighlight', 'height', 'width'];
                    var noptionprops = optionprops.length;
                    for (var i_1 = 0; i_1 < noptionprops; i_1++) {
                        var propname = optionprops[i_1];
                        if (this.options && this.options[propname] !== undefined) {
                            this[propname] = this.options[propname];
                        }
                        else {
                            if (localeOptions.hasOwnProperty(propname)) {
                                this[propname] = localeOptions[propname];
                            }
                        }
                    }
                    var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
                    this.dayIdx = days.indexOf(this.firstDayOfWeek);
                    if (this.dayIdx !== -1) {
                        var idx = this.dayIdx;
                        for (var i = 0; i < days.length; i++) {
                            this.weekDays.push(this.dayLabels[days[idx]]);
                            idx = days[idx] === 'sa' ? 0 : idx + 1;
                        }
                    }
                };
                MyDatePicker.prototype.ngOnChanges = function (changes) {
                    if (changes.hasOwnProperty('selDate')) {
                        this.selectionDayTxt = changes['selDate'].currentValue;
                        this.selectedDate = this._parseDate(this.selectionDayTxt);
                    }
                    if (changes.hasOwnProperty('defaultMonth')) {
                        this.defaultDate = this._parseDate(changes['defaultMonth'].currentValue);
                    }
                };
                MyDatePicker.prototype.removeBtnClicked = function () {
                    this.selectionDayTxt = '';
                    this.selectedDate = { year: 0, month: 0, day: 0 };
                    this.dateChanged.emit({ date: {}, formatted: this.selectionDayTxt, epoc: 0 });
                };
                MyDatePicker.prototype.openBtnClicked = function () {
                    this.showSelector = !this.showSelector;
                    if (this.showSelector) {
                        var y = 0, m = 0;
                        if (this.selectedDate.year === 0 && this.selectedDate.month === 0 && this.selectedDate.day === 0) {
                            if (this.defaultDate.year === 0 && this.defaultDate.month === 0) {
                                y = this.today.getFullYear();
                                m = this.today.getMonth() + 1;
                            }
                            else {
                                y = this.defaultDate.year;
                                m = this.defaultDate.month;
                            }
                        }
                        else {
                            y = this.selectedDate.year;
                            m = this.selectedDate.month;
                        }
                        this.visibleMonth = { monthTxt: this.monthLabels[m], monthNbr: m, year: y };
                        this.createMonth(m, y);
                    }
                };
                MyDatePicker.prototype.prevMonth = function () {
                    var m = this.visibleMonth.monthNbr;
                    var y = this.visibleMonth.year;
                    if (m === 1) {
                        m = 12;
                        y--;
                    }
                    else {
                        m--;
                    }
                    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
                    this.createMonth(m, y);
                };
                MyDatePicker.prototype.nextMonth = function () {
                    var m = this.visibleMonth.monthNbr;
                    var y = this.visibleMonth.year;
                    if (m === 12) {
                        m = 1;
                        y++;
                    }
                    else {
                        m++;
                    }
                    this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
                    this.createMonth(m, y);
                };
                MyDatePicker.prototype.prevYear = function () {
                    this.visibleMonth.year--;
                    this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
                };
                MyDatePicker.prototype.nextYear = function () {
                    this.visibleMonth.year++;
                    this.createMonth(this.visibleMonth.monthNbr, this.visibleMonth.year);
                };
                MyDatePicker.prototype.todayClicked = function () {
                    this.selectDate({ day: this.today.getDate(), month: this.today.getMonth() + 1, year: this.today.getFullYear() });
                };
                MyDatePicker.prototype.cellClicked = function (cell) {
                    if (cell.cmo === this.PREV_MONTH) {
                        this.prevMonth();
                    }
                    else if (cell.cmo === this.CURR_MONTH) {
                        this.selectDate(cell);
                    }
                    else if (cell.cmo === this.NEXT_MONTH) {
                        this.nextMonth();
                    }
                };
                MyDatePicker.prototype.selectDate = function (date) {
                    this.selectedDate = { day: date.day, month: date.month, year: date.year };
                    this.selectionDayTxt = this.formatDate(date);
                    this.showSelector = false;
                    var epoc = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime() / 1000.0;
                    this.dateChanged.emit({ date: this.selectedDate, formatted: this.selectionDayTxt, epoc: epoc });
                };
                MyDatePicker.prototype.preZero = function (val) {
                    return parseInt(val) < 10 ? '0' + val : val;
                };
                MyDatePicker.prototype.formatDate = function (val) {
                    return this.dateFormat.replace('yyyy', val.year)
                        .replace('mm', this.preZero(val.month))
                        .replace('dd', this.preZero(val.day));
                };
                MyDatePicker.prototype.monthText = function (m) {
                    return this.monthLabels[m];
                };
                MyDatePicker.prototype.monthStartIdx = function (y, m) {
                    var d = new Date();
                    d.setDate(1);
                    d.setMonth(m - 1);
                    d.setFullYear(y);
                    var idx = d.getDay() + this.sundayIdx();
                    return idx >= 7 ? idx - 7 : idx;
                };
                MyDatePicker.prototype.daysInMonth = function (m, y) {
                    return new Date(y, m, 0).getDate();
                };
                MyDatePicker.prototype.daysInPrevMonth = function (m, y) {
                    if (m === 1) {
                        m = 12;
                        y--;
                    }
                    else {
                        m--;
                    }
                    return this.daysInMonth(m, y);
                };
                MyDatePicker.prototype.isCurrDay = function (d, m, y, cmo) {
                    return d === this.today.getDate() && m === this.today.getMonth() + 1 && y === this.today.getFullYear() && cmo === 2;
                };
                MyDatePicker.prototype.sundayIdx = function () {
                    return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
                };
                MyDatePicker.prototype.createMonth = function (m, y) {
                    this.dates.length = 0;
                    var monthStart = this.monthStartIdx(y, m);
                    var dInThisM = this.daysInMonth(m, y);
                    var dInPrevM = this.daysInPrevMonth(m, y);
                    var sunIdx = this.sundayIdx();
                    var dayNbr = 1;
                    var cmo = this.PREV_MONTH;
                    for (var i = 1; i < 7; i++) {
                        var week = [];
                        if (i === 1) {
                            var pm = dInPrevM - monthStart + 1;
                            for (var j = pm; j <= dInPrevM; j++) {
                                week.push({ day: j, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo), sun: week.length === sunIdx });
                            }
                            cmo = this.CURR_MONTH;
                            var daysLeft = 7 - week.length;
                            for (var j = 0; j < daysLeft; j++) {
                                week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                                dayNbr++;
                            }
                        }
                        else {
                            for (var j = 1; j < 8; j++) {
                                if (dayNbr > dInThisM) {
                                    dayNbr = 1;
                                    cmo = this.NEXT_MONTH;
                                }
                                week.push({ day: dayNbr, month: m, year: y, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo), sun: week.length === sunIdx });
                                dayNbr++;
                            }
                        }
                        this.dates.push(week);
                    }
                };
                MyDatePicker.prototype._parseDate = function (ds) {
                    var rv = { day: 0, month: 0, year: 0 };
                    if (ds !== '') {
                        var fmt = this.options && this.options.dateFormat !== undefined ? this.options.dateFormat : this.dateFormat;
                        var dpos = fmt.indexOf('dd');
                        if (dpos >= 0) {
                            rv.day = parseInt(ds.substring(dpos, dpos + 2));
                        }
                        var mpos = fmt.indexOf('mm');
                        if (mpos >= 0) {
                            rv.month = parseInt(ds.substring(mpos, mpos + 2));
                        }
                        var ypos = fmt.indexOf('yyyy');
                        if (ypos >= 0) {
                            rv.year = parseInt(ds.substring(ypos, ypos + 4));
                        }
                    }
                    return rv;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyDatePicker.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MyDatePicker.prototype, "locale", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MyDatePicker.prototype, "defaultMonth", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MyDatePicker.prototype, "selDate", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MyDatePicker.prototype, "dateChanged", void 0);
                MyDatePicker = __decorate([
                    core_1.Component({
                        selector: 'my-date-picker',
                        directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass, common_1.NgStyle],
                        templateUrl: template,
                        styleUrls: [styles]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MyDatePicker);
                return MyDatePicker;
            }());
            exports_1("MyDatePicker", MyDatePicker);
        }
    }
});
//# sourceMappingURL=mydatepicker.js.map