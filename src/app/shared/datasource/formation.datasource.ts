import {Formation} from '../model/formation.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, catchError, finalize, Observable, of} from 'rxjs';
import {FormationService} from '../service/formation.service';

export class FormationDatasource implements DataSource<Formation> {

    private formationSubject = new BehaviorSubject<Formation[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private formationService: FormationService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Formation[]> {
        return this.formationSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.formationSubject.complete();
        this.loadingSubject.complete();
    }

    loadFormations() {
        this.loadingSubject.next(true);
        this.formationService.getFormations().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((formations: Formation[]) => {
                this.formationSubject.next(formations);
            });
    }

}
