import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Participant } from "../model/participant.model";
import { Session } from "../model/session.model";

@Injectable()
export class SessionsService {
    
    constructor(private http: HttpClient) {
    }

    public getSessions() {
        return this.http.get<Session>('http://localhost:8080/sessions')
    }

    public getParticipations(sessionId: string) {
        return this.http.get<Participant>('http://localhost:8080/sessions/' + sessionId + '/participants')
    }

    public getNotParticipations(sessionId: string) {
        return this.http.get<Participant>('http://localhost:8080/sessions/' + sessionId + '/not-participants')
    }

    public subscribeParticipation(sessionId: string, participantId) {
        return this.http.post('http://localhost:8080/sessions/' + sessionId + '/subscribe/' + participantId, null)
    }

    public unsubscribeParticipation(sessionId: string, participantId) {
        return this.http.post('http://localhost:8080/sessions/' + sessionId + '/unsubscribe/' + participantId, null)
    }

    public deleteSessionById(sessionId: string) {
        return this.http.delete('http://localhost:8080/sessions/' + sessionId)
    }

    public saveSession(session) {
        return this.http.post('http://localhost:8080/sessions/' , session);
    }

}