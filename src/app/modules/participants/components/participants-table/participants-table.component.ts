import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../../../../core/services/http-request.service';
import { ParticipantsModel } from 'src/app/shared/models/participants.model';
import { EndPoints } from 'src/app/core/constants/end-points';

@Component({
  selector: 'app-participants-table',
  templateUrl: './participants-table.component.html',
  styleUrls: ['./participants-table.component.css'],
})
export class ParticipantsTableComponent implements OnInit {
  // inyección de dependencias para crear una instancia del servicios
  // mediante el constructor del component
  constructor(private httpService: HttpRequestService) {}

  participants: Array<ParticipantsModel> = [];
  tablePage = 1;

  getParticipantsData = async () => {
    try {
      const response = await this.httpService.getHttpRequest(
        EndPoints.formsEndPoints
      );
      this.participants = response as Array<ParticipantsModel>;
    } catch (error) {
      console.error({
        error,
        method: 'getParticipantsData',
      });
    }
  };

  ngOnInit(): void {
    this.getParticipantsData();
  }
}
