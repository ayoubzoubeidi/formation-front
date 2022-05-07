import {Formateur} from './formateur.model';
import {Session} from './session.model';
import {Domaine} from './domaine.model';

export class Formation {

    id: string;
    titre: string;
    typeFormation: string;
    formateur: Formateur;
    sessions: Session[];
    duree: number
    domaine: Domaine;
    budget: string;

}
