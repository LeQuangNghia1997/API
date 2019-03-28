import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from './user';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<IUser[]> {
        return this.http.get<IUser[]>('/api/users');
    }
    findmyId(id: number): Observable<IUser> {
        return this.http.get<IUser>('/api/users/' + id);
    }

    create(user: Partial<IUser>): Observable<IUser> {
        return this.http.post<IUser>('api/users/create', user);
    }

    delete(id: number): Observable<any> {
        return this.http.post<IUser>('/api/users/' + id + '/delete', null);
    }
}
