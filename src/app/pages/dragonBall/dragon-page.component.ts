import {Component, signal} from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
    templateUrl: './dragon-page,component.html',
  }
)
export class DragonPageComponent {
  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: 'Veggeta', power: 4000},
    {id: 3, name: 'Piccolo', power: 3500}
  ])
}
