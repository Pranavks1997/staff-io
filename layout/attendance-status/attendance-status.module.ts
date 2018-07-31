import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceStatusRoutingModule } from './attendance-status-routing.module';
import { routingComponents } from '../dashboard/dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AttendanceStatusRoutingModule,
    routingComponents
  ],
  declarations: []
})
export class AttendanceStatusModule { }
