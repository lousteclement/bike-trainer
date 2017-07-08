import { Component } from '@angular/core';
import { Programme } from './programme';
import { ProgrammeService } from './programme.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-programmes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `  
  <ul class="programmes">
    <li *ngFor="let programme of programmes" [class.selected]="programme === selectedProgramme" (click)="onSelect(programme)">
      <span class="badge">{{programme.id}}</span> {{programme.name}}
    </li>
  </ul>
  <programme-detail [programme]="selectedProgramme"></programme-detail>
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
  `],
})
export class ProgrammesComponent implements OnInit {
  programmes : Programme[];
  selectedProgramme : Programme;

  constructor(private programmeService: ProgrammeService){ }

  getProgrammes(): void{
    this.programmeService.getProgrammes().then(programmes => this.programmes = programmes);
  }

  ngOnInit(): void{
    this.getProgrammes();
  }

  onSelect(programme: Programme): void{
  this.selectedProgramme = programme;
  }
}

