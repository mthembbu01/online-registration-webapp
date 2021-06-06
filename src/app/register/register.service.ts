import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/user.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) {}

  public login(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/profile-management/login`, user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.apiServerUrl}/profile-management/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/profile-management/register`, user);
  }
}
