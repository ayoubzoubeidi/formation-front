import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../model/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) {
  }

  public getParticipants() {
    return this.http.get<Participant[]>('http://localhost:8080/participants')
}

public addParticipant(paticipant: Participant) {
  return this.http.post('http://localhost:8080/participants', paticipant)
}

}
