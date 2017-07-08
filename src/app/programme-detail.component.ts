import { Component, Input } from '@angular/core';
import { Programme } from './programme';

@Component({
    selector: 'programme-detail',
    template: `
    <div *ngIf="programme">
      <h2>{{programme.name}} details!</h2>
      <div><label>id: </label>{{programme.id}}</div>
      <div>s
        <label>name: </label>
        <input [(ngModel)]="programme.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class ProgrammeDetailComponent{
    @Input() programme : Programme;
}