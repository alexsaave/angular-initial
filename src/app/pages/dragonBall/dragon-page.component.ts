import {Component, computed, inject, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CharacterList} from '../../components/dragon-ball/character-list/character-list';
import {DragonballCharacterAdd} from '../../components/dragon-ball/dragonball-character-add/dragonball-character-add';
import {DragonballService} from '../../services/dragonball';

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  imports: [
    CharacterList,
    DragonballCharacterAdd
  ],
    templateUrl: './dragon-page,component.html'
  }
)
export class DragonPageComponent {
  public dragonBallService = inject(DragonballService);
}
