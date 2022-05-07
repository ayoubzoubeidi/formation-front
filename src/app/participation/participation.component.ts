import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipationDatasource } from 'app/shared/datasource/participation.datasource';
import { SessionsService } from 'app/shared/service/sessions.service';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {


  dataSource: ParticipationDatasource;
  notParticipantsDataSource: ParticipationDatasource;

  displayedColumns = ['nom', 'prenom', 'email', 'tel', 'option'];

  constructor(private sessionsService: SessionsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new ParticipationDatasource(this.sessionsService.getParticipations(this.route.snapshot.params['id']));
    this.notParticipantsDataSource = new ParticipationDatasource(this.sessionsService.getNotParticipations(this.route.snapshot.params['id']));
    this.dataSource.loadSessions()
    this.notParticipantsDataSource.loadSessions();
  }

  unsubscribeParticipation(participantId) {
    this.sessionsService.unsubscribeParticipation(this.route.snapshot.params['id'], participantId).subscribe(
      () => {
        this.dataSource.loadSessions()
        this.notParticipantsDataSource.loadSessions();
      }
    );
  }

  subscribeParticipation(participantId) {
    this.sessionsService.subscribeParticipation(this.route.snapshot.params['id'], participantId).subscribe(
      () => {
        this.dataSource.loadSessions()
        this.notParticipantsDataSource.loadSessions();
      }
    );
    
  }
}
