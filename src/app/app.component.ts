import { Component } from '@angular/core';

@Component({
    selector :'app-root',
    template :`
  <div style="text-align: center">
    <h1>{{title}}</h1>
    <h2>Veuillez sélectionner votre programme d'entrainement</h2>
  </div>
  <my-programmes></my-programmes>
  `
})
export class AppComponent{
  title = 'Bike Trainer 1.0';
  
}