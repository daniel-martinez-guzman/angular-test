import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsViewComponent } from './views/participants-view/participants-view.component';
import { ParticipantsTableComponent } from './components/participants-table/participants-table.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppFilterPipe } from 'src/app/shared/pipes/filter.pipe';

const routes: Routes = [
  { path: 'participants', component: ParticipantsViewComponent },
];

@NgModule({
  declarations: [
    ParticipantsViewComponent,
    ParticipantsTableComponent,
    AppFilterPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgxPaginationModule],
  exports: [RouterModule],
})
export class ParticipantsModule {}
