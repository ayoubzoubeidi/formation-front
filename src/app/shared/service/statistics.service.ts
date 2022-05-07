import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DashboardStatistics } from "../model/dashboard-statistics.model";

@Injectable({
    providedIn: 'root'
  })
export class StatisticsService {
    
    constructor(private http: HttpClient) {
    }

    public getDashboardStatistics() {
        return this.http.get<DashboardStatistics>('http://localhost:8080/statistics')
    }
}