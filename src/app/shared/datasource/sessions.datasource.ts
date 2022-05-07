import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Session } from "../model/session.model";
import { SessionsService } from "../service/sessions.service";

export class SessionsDatasource implements DataSource<Session> {

    private sessionSubject = new BehaviorSubject<Session[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private sessionsObservable: Observable<Session>) {
    }

    connect(collectionViewer: CollectionViewer): Observable<Session[]> {
        return this.sessionSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sessionSubject.complete();
        this.loadingSubject.complete();
    }

    loadSessions() {
        this.loadingSubject.next(true);
        this.sessionsObservable.pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((sessions: Session[]) => {
                this.sessionSubject.next(sessions);
            });
    }

}