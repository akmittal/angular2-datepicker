//////////////////////////////////////////////////////////////////////////////// 
// 
// Copyright:   (C) 2016 by 
// 
//              SeaChange International, Inc. 50 Nagog Park 
//              Acton, Massachusetts 01720 
//              United States of America 
//------------------------------------------------------------------------------ 
// All Rights Reserved.  Unpublished rights reserved under the  copyright laws 
// of the United States. 
// 
// The software contained on this media is proprietary to and embodies the 
// confidential technology of SeaChange International Inc.  Possession, use, 
// duplication or dissemination of the software and media is authorized only 
// pursuant to a valid written license from SeaChange International Inc. 
// 
// This software is furnished under a license and may be used and copied only in 
// accordance with the terms of such license and with the inclusion of the above 
// copyright notice.  This software or any other copies thereof may not be 
// provided or otherwise made available to any other person.  No title to and 
// ownership of the software is hereby transferred. 
// 
// The information in this software is subject to change without notice and 
// should not be construed as a commitment by SeaChange International Inc. 
// 
// SeaChange assumes no responsibility for the use or reliability of its 
// software on equipment which is not supplied by SeaChange. 
// 
// RESTRICTED RIGHTS LEGEND Use, duplication, or disclosure by the U.S. 
// Government is subject to restrictions as set forth in Subparagraph (c)(1)(ii) 
// of DFARS 252.227-7013, or in FAR 52.227-19, as applicable.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ng2-bootstrap/components/timepicker/timepicker.module';
import { MyDatePickerModule } from './../my-date-picker/my-date-picker.module';
import { SampleDateApp } from './sample-date-app.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        BrowserModule,
        TimepickerModule,
        CommonModule,
        FormsModule,
        MyDatePickerModule
    ],
    declarations: [
        SampleDateApp,
    ],
    exports: [SampleDateApp],
    bootstrap: [SampleDateApp]
})
export class SampleDateAppModule {

}
