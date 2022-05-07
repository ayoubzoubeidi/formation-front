import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {SessionsListComponent} from '../../sessions-list/sessions-list.component';
import { SessionsListByFormationComponent } from 'app/sessions-list-by-formation/sessions-list-by-formation.component';
import { ParticipationComponent } from 'app/participation/participation.component';
import { LoginComponent } from 'app/login/login.component';
import { FormationsListComponent } from 'app/formations-list/formations-list.component';
import { AddParticipantComponent } from 'app/add-participant/add-participant.component';
import { AddSessionComponent } from 'app/add-session/add-session.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'formations',     component: FormationsListComponent },
    { path: 'sessions-list',  component: SessionsListComponent },
    { path: 'formations/:id/sessions',  component: SessionsListByFormationComponent },
    { path: 'sessions/:id/participation',  component: ParticipationComponent },
    { path: 'add-session',  component: AddSessionComponent },
    { path: 'add-participant',  component: AddParticipantComponent },
];
