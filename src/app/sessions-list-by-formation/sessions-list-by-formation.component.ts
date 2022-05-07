import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionsDatasource } from 'app/shared/datasource/sessions.datasource';
import { FormationService } from 'app/shared/service/formation.service';

@Component({
  selector: 'app-sessions-list-by-formation',
  templateUrl: './sessions-list-by-formation.component.html',
  styleUrls: ['./sessions-list-by-formation.component.css']
})
export class SessionsListByFormationComponent implements OnInit {


  dataSource: SessionsDatasource;
  displayedColumns = ['id', 'titre', 'formateur' ,'dateDebut', 'dateFin', 'partiicpants', 'delete'];

  constructor(private formationService: FormationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new SessionsDatasource(this.formationService.getFormationsSessions(this.route.snapshot.params['id']));
    this.dataSource.loadSessions();
  }

  deleteSession(id: string) {
    this.formationService.deleteSessionById(id).subscribe()
  }
}
