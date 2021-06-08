import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/user.model';
import {Person} from '../shared/person.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl = environment.apiBaseUrl ;
  private apiServerUrl2 = environment.apiPersonUrl;

  constructor(private http: HttpClient) {}

  public (user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/profile-management/login`, user);
  }

  public addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(`${this.apiServerUrl2}/v1/api/person`,person);
  }

  public getPersons(): Observable<Person[]>{
    return this.http.get<any>(`${this.apiServerUrl2}/v1/api/person/all`);
  }

  public getPerson(id:Number): Observable<Person>{
    return this.http.get<Person>(`${this.apiServerUrl2}/v1/api/person/${id}`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.apiServerUrl}/profile-management/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/profile-management/register`, user);
  }
}
