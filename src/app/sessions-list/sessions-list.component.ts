import {Component, OnInit} from '@angular/core';
import {SessionsDatasource} from 'app/shared/datasource/sessions.datasource';
import {SessionsService} from 'app/shared/service/sessions.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-sessions-list',
    templateUrl: './sessions-list.component.html',
    styleUrls: ['./sessions-list.component.css'],
    providers: [MessageService]
})
export class SessionsListComponent implements OnInit {


    dataSource: SessionsDatasource;
    displayedColumns = ['id', 'titre', 'formateur', 'dateDebut', 'dateFin', 'partiicpants', 'delete'];

    constructor(private sessionsService: SessionsService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.dataSource = new SessionsDatasource(this.sessionsService.getSessions());
        this.dataSource.loadSessions()
    }

    deleteSession(id: string) {
        this.sessionsService.deleteSessionById(id).subscribe(
            () => {
                this.showSuccess()
                this.dataSource.loadSessions()
            }, () => {
                this.showError()
            }
        )
    }

    showSuccess() {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Deleted!'});
    }

    showError() {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!'});
    }
}
