import {Component, computed, input, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character';
import {single} from 'rxjs';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {
  name =signal('');
  power = signal(0);

  newCharacter = output<Character>()

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    let newCharacter: Character = {
      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power()
    }

 //   this.characters.update((list)=>[...list, newCharacter])
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
