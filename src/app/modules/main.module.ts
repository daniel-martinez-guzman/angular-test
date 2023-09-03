import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from './common/common.module';
import { ParticipantsModule } from './participants/participants.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    ParticipantsModule,
  ],
})
export class MainModule {}
