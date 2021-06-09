import {Injectable, EventEmitter, Output, Component, OnInit} from '@angular/core';
import {Person} from '../shared/person.model';
import {RegisterService} from '../register/register.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public personList:Person[] = [];

  constructor(
    private registerService: RegisterService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ) {

    }

  ngOnInit(): void {
    console.log('On dashboard');
  this.registerService.getPersons().subscribe((list)=> {this.personList = list as Person []; console.log('Subscribe List: ',this.personList);});

  }

}