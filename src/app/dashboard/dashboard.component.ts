import {Injectable} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Person} from '../shared/person.model';
import {RegisterService} from '../register/register.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private persons:Person[] = [];

  constructor(
    private registerService: RegisterService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ) {
     }

  ngOnInit(): void {
    console.log('On dashboard');
  this.registerService.getPersons()
    .subscribe(
    (person) => console.log(person)
    )   ;
  console.log('Person List: ',this.persons);
  }

}