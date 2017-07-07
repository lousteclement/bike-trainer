import { Component, Input } from '@angular/core';
import { Programme } from './programme';

@Component({
    selector: 'programme-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>s
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class ProgrammeDetailComponent{
    programme: Programme;
}