import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'stokvel-app';
  selectedDisplay = 'dashboard';

  onNavigate(selected: string): void {
    this.selectedDisplay = selected;
  }

  ngOnInit(): void {
  }
}
