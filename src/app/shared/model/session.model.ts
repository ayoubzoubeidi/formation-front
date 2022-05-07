import {Participant} from './participant.model';

export class Session {
    id: string;
    formation: string;
    participants: Participant[];
    dateDebut: string;
    dateFin: string;
}
