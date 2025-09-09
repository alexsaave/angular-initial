import {Component, input} from '@angular/core';
import {Character} from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html'
})
export class CharacterList {
  title =input.required<string>()
  characters = input.required<Character[]>()
}
