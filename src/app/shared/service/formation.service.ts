import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Formation} from '../model/formation.model';
import { Session } from '../model/session.model';

@Injectable()
export class FormationService {
    
    constructor(private http: HttpClient) {
    }

    public getFormations() {
        return this.http.get<Formation>('http://localhost:8080/formations')
    }

    public getFormationsSessions(formationId: string) {
        return this.http.get<Session>('http://localhost:8080/formations' + '/' + formationId + '/sessions')
    }

    public deleteSessionById(sessionId: string) {
        return this.http.delete('http://localhost:8080/sessions/' + sessionId)
    }

    public deleteFormationnById(formationId: string) {
        return this.http.delete('http://localhost:8080/formations/' + formationId)
    }

    
}