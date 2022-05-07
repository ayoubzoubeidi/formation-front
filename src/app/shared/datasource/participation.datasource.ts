import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Participant } from "../model/participant.model";

export class ParticipationDatasource implements DataSource<Participant> {

    private participationSubject = new BehaviorSubject<Participant[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private participantObservable: Observable<Participant>) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Participant[]> {
        return this.participationSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.participationSubject.complete();
        this.loadingSubject.complete();
    }

    loadSessions() {
        this.loadingSubject.next(true);
        this.participantObservable.pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((participants: Participant[]) => {
                this.participationSubject.next(participants);
            });
    }

}