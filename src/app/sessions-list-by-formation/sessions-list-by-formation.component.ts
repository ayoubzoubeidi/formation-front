import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SessionsDatasource} from 'app/shared/datasource/sessions.datasource';
import {FormationService} from 'app/shared/service/formation.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-sessions-list-by-formation',
    templateUrl: './sessions-list-by-formation.component.html',
    styleUrls: ['./sessions-list-by-formation.component.css'],
    providers: [MessageService]
})
export class SessionsListByFormationComponent implements OnInit {


    dataSource: SessionsDatasource;
    displayedColumns = ['id', 'titre', 'formateur', 'dateDebut', 'dateFin', 'partiicpants', 'delete'];

    constructor(private formationService: FormationService,
                private route: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.dataSource = new SessionsDatasource(this.formationService.getFormationsSessions(this.route.snapshot.params['id']));
        this.dataSource.loadSessions();
    }

    deleteSession(id: string) {
        this.showSuccess()
        this.formationService.deleteSessionById(id).subscribe()
    }

    showSuccess() {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Deleted!'});
    }

    showError() {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!'});
    }
}
