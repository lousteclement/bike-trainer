import { Component } from '@angular/core';
import { Programme } from './programme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div style="text-align: center">
    <h1>{{title}}</h1>
    <h2>Veuillez sélectionner votre programme d'entrainement</h2>
  </div>
  <ul class="programmes">
    <li *ngFor="let programme of programmes" [class.selected]="programme === selectedProgramme" (click)="onSelect(programme)">
      <span class="badge">{{programme.id}}</span> {{programme.name}}
    </li>
  </ul>
  <div *ngIf="selectedProgramme">
    <h2>{{selectedProgramme.name}} details!</h2>
    <div><label>id: </label>{{selectedProgramme.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedProgramme.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;  
}
.selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .programmes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .programmes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .programmes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .programmes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .programmes .text {
    position: relative;
    top: -3px;
  }
  .programmes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})
export class AppComponent {
  title = 'Bike Trainer 1.0';
  programmes = PROGRAMMES;
  selectedProgramme : Programme;

  onSelect(programme: Programme): void{
  this.selectedProgramme = programme;
  }
}

const PROGRAMMES: Programme[] = [
  {id: 2, name: 'Programme 2'},
  {id: 3, name: 'Programme 3'},
  {id: 4, name: 'Programme 4'},
  {id: 5, name: 'Programme 5'},
  {id: 6, name: 'Programme 6'},
  {id: 7, name: 'Programme 7'},
  {id: 8, name: 'Programme 8'},
  {id: 9, name: 'Programme 9'},
  {id: 10, name: 'Programme 10'},
];