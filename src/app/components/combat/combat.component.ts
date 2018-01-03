import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlayersService } from '../../services/players.service';
import { MonstersService } from '../../services/monsters.service';
import Player from '../../models/Player';
import Monster from '../../models/Monster';

@Component({
  selector: 'Combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit, OnDestroy {

  title = 'combat';
  participantList: Array<any> = [];
  playerList: Array<Player> = [];
  monsterList: Array<Monster> = [];

  playersSubscription: Subscription;
  monstersSubscription: Subscription;

  constructor(private _playersService: PlayersService, private _monstersService: MonstersService) {}

  ngOnInit() {
    this.playersSubscription = this._playersService.getPlayers().subscribe(players => {
      this.playerList = players;
    });
    this.monstersSubscription = this._monstersService.getMonsters().subscribe(monsters => {
      this.monsterList = monsters;
    });
  }

  mergeParticipants() {
    this.participantList = [].concat(
      this.playerList.map(player => player.name),
      this.monsterList.map(monster => monster.name)
    );
  }

  generateCombat() {
    console.log('### GENERATE COMBAT ###');
    console.log('players', this.playerList);
    console.log('monsters', this.monsterList.filter(monster => monster.quantity));
  }

  addMonster(monster) {
    monster.quantity += 1;
  }

  removeMonster(monster) {
    if (monster.quantity) monster.quantity -= 1;
  }

  removePlayer(playerParam) {
    this.playerList = this.playerList.filter(player => playerParam.name !== player.name);
  }

  ngOnDestroy() {
    if (this.playersSubscription) this.playersSubscription.unsubscribe();
    if (this.monstersSubscription) this.monstersSubscription.unsubscribe();
  }
}
