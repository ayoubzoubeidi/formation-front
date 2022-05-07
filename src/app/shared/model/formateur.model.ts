import {Organisme} from './organisme.model';
import { Session } from './session.model';

export class Formateur {
    id: string;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    organisme: Organisme;
    sessions: Session[];
    typeFormateur: string;


}
