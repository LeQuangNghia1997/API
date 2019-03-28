import { Injectable } from '@angular/core';
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
  // createHero(hero: Partial<IHero>): Observable<IHero> {
  //  return this.http.post<IHero>('/api/users/create', hero);
  // }
  findmyId(id: number): Observable<IUser> {
    return this.http.get<IUser>('/api/users/' + id) ;
  }
  create(user: Partial<IUser>): Observable<IUser> {
    return this.http.post<IUser>('api/user/create', user );
  }

}
