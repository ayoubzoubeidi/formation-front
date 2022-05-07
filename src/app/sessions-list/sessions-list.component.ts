import { Component, OnInit } from '@angular/core';
import { SessionsDatasource } from 'app/shared/datasource/sessions.datasource';
import { SessionsService } from 'app/shared/service/sessions.service';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {


  dataSource: SessionsDatasource;
  displayedColumns = ['id', 'titre', 'formateur' ,'dateDebut', 'dateFin', 'partiicpants', 'delete'];

  constructor(private sessionsService: SessionsService) { }

  ngOnInit() {
    this.dataSource = new SessionsDatasource(this.sessionsService.getSessions());
    this.dataSource.loadSessions()
  }

  deleteSession(id: string) {
    this.sessionsService.deleteSessionById(id).subscribe()
  }
}
