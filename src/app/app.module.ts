import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {FormationService} from './shared/service/formation.service';
import { SessionsService } from './shared/service/sessions.service';
import { ParticipantService } from './shared/service/participant.service';
import { FormateurService } from './shared/service/formateur.service';
import { AuthorizationInterceptor } from './shared/auth/AuthorizationInterceptor';
import { BlankComponent } from './blank/blank.component';
import { AuthenticationService } from './shared/auth/authentication.service';
import { LoginComponent } from './login/login.component';
import { StatisticsService } from './shared/service/statistics.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    BlankComponent

  ],
  providers: [FormationService, SessionsService, FormateurService, ParticipantService, AuthenticationService, StatisticsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
