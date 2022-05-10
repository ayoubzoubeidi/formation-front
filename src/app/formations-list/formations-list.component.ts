import {Component, OnInit} from '@angular/core';
import {FormationDatasource} from '../shared/datasource/formation.datasource';
import {FormationService} from '../shared/service/formation.service';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-table-list',
    templateUrl: './formations-list.component.html',
    styleUrls: ['./formations-list.component.css'],
    providers: [MessageService]
})
export class FormationsListComponent implements OnInit {


    dataSource: FormationDatasource;
    displayedColumns = ['id', 'titre', 'domaine', 'sessions', 'delete'];

    constructor(private formationService: FormationService,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.dataSource = new FormationDatasource(this.formationService);
        this.dataSource.loadFormations()
    }

    deleteFormation(id: string) {
        this.formationService.deleteFormationnById(id).subscribe(
            () => {
                this.showSuccess()
                this.dataSource.loadFormations()
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
