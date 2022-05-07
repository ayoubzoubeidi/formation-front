import { Component, OnInit } from '@angular/core';
import {FormationDatasource} from '../shared/datasource/formation.datasource';
import {FormationService} from '../shared/service/formation.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.css']
})
export class FormationsListComponent implements OnInit {


  dataSource: FormationDatasource;
  displayedColumns = ['id', 'titre', 'domaine', 'sessions', 'delete'];

  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.dataSource = new FormationDatasource(this.formationService);
    this.dataSource.loadFormations()
  }

  deleteFormation(id: string) {
    this.formationService.deleteFormationnById(id).subscribe()
  }
}
