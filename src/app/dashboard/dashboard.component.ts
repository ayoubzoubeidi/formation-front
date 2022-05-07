import {Component, OnInit} from '@angular/core';
import { DashboardStatistics } from 'app/shared/model/dashboard-statistics.model';
import { StatisticsService } from 'app/shared/service/statistics.service';
import * as Chartist from 'chartist';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    username: string;
    dashboardStatistics: DashboardStatistics = new DashboardStatistics();
    constructor(private statisticsService: StatisticsService) {
    }



    ngOnInit() {

        this.statisticsService.getDashboardStatistics().subscribe(
            data => {
                this.dashboardStatistics = data;
            }
        )
        this.username = localStorage.getItem("username")
    }

}
