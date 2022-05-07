import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {SessionsListComponent} from '../../sessions-list/sessions-list.component';
import { SessionsListByFormationComponent } from 'app/sessions-list-by-formation/sessions-list-by-formation.component';
import { ParticipationComponent } from 'app/participation/participation.component';
import { LoginComponent } from 'app/login/login.component';
import { FormationsListComponent } from 'app/formations-list/formations-list.component';
import { AddSessionComponent } from 'app/add-session/add-session.component';
import { AddParticipantComponent } from 'app/add-participant/add-participant.component';
import {CalendarModule} from 'primeng/calendar';
import {PickListModule} from 'primeng/picklist';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatIconModule,
        CalendarModule,
        PickListModule,
        ToastModule
    ],
  declarations: [
    DashboardComponent,
    FormationsListComponent,
    SessionsListComponent,
    ParticipationComponent,
    SessionsListByFormationComponent,
    AddSessionComponent,
    AddParticipantComponent,
  ]
})

export class AdminLayoutModule {}
