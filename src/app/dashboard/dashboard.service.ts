import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/user.model';
import {Person} from '../shared/person.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiServerUrl = environment.apiBaseUrl ;
  private apiServerUrl2 = environment.apiPersonUrl;

  constructor(private http: HttpClient) {}

  public getPersons(): Person[]{
    return this.http.get<any>(`${this.apiServerUrl2}/v1/api/person/all`);
  }

}
