import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlayersService } from '../../services/players.service';
import Player from '../../models/Player';

@Component({
  selector: 'Players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {

  showPlayerForm: boolean;
  newPlayer: Player;
  playerList: Array<Player>;

  playersSubscription: Subscription;

  constructor(private _playersService: PlayersService) {
    this.showPlayerForm = false;
    this.newPlayer = new Player();
    this.playerList = [];
  }

  ngOnInit() {
    this.playersSubscription = this._playersService.getPlayers().subscribe(players => {
      this.playerList = players;
    });
  }

  ngOnDestroy() {
    if (this.playersSubscription) this.playersSubscription.unsubscribe();
  }

  togglePlayerForm() {
    this.showPlayerForm = !this.showPlayerForm;
  }

  registerPlayer(event: Event) {
    event.preventDefault();
    this._playersService.addPlayer(this.newPlayer);
    console.log('playerList', this.playerList);
    this.newPlayer = new Player();
    this.togglePlayerForm();
  }

}
