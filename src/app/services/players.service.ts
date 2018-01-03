import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import Player from '../models/Player';

@Injectable()
export class PlayersService {

  private players : Array<Player> = [
    new Player('Sir Kathur', 'Human', 'Paladin'),
    new Player('Kruuk', 'Aarakoa', 'Monk'),
    new Player('Brothur Barril-de-Carvalho', 'Dwarf', 'Druid'),
    new Player('Brothur Barril-de-Carvalho 2', 'Dwarf', 'Druid'),
    new Player('Brothur Barril-de-Carvalho 3', 'Dwarf', 'Druid'),
  ];

  private playerData: BehaviorSubject<Array<Player>> = new BehaviorSubject(this.players);

  constructor() {}

  getPlayers(): BehaviorSubject<Player[]> {
    return this.playerData;
  }

  addPlayer(player: Player) {
    // console.log('player adding', player);
    this.players.push(player);
    this.playerData.next(this.players);
  }
}
