import {Component, computed, signal} from '@angular/core';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
    selector: 'super-page-component',
    templateUrl: './dragon-super-page.component.html'
  }
)
export class DragonSuperPageComponent {
  name = signal('Gohan');
  power = signal(1000);

  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: 'Veggeta', power: 4000},
    // {id: 3, name: 'Piccolo', power: 3500},
    // {id: 4, name: 'Yamcha', power: 500}
  ])

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    let newCharacter: Character = {
      id: 66,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list) => [...list, newCharacter])
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
