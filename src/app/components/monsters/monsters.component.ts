import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MonstersService } from '../../services/monsters.service';
import Monster from '../../models/Monster';

@Component({
  selector: 'Monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit, OnDestroy {

  showMonsterForm: boolean;
  monsterSearch: Monster;
  monsterResult: Monster;
  monsterList: Array<Monster>;

  monstersSubscription: Subscription;

  constructor(private _monstersService: MonstersService) {
    this.showMonsterForm = false;
    this.monsterSearch = new Monster();
    this.monsterList = [];
  }

  ngOnInit() {
    this.monstersSubscription = this._monstersService.getMonsters().subscribe(monsters => {
      this.monsterList = monsters;
    });
  }

  toggleMonsterForm() {
    this.showMonsterForm = !this.showMonsterForm;
  }

  searchMonster() {
    this.monsterResult = new Monster();
    if (this.monsterSearch.index) {
      this.getMonsterById(this.monsterSearch.index);
    } else if (this.monsterSearch.name) {
      this._monstersService.getMonsterByName(this.monsterSearch.name)
        .then((data: any) => {
          if (data.count) {
            const regex = /(http[s]?:\/\/www.dnd5eapi.co\/api\/monsters\/)(.*)/;
            const monsterId = regex.exec(data.results[0].url)[2];
            this.getMonsterById(monsterId);
          }
        });
    }
  }

  getMonsterById(monsterId) {
    this._monstersService.getMonsterById(monsterId).then((data: any) => {
      if (data) this.monsterResult = data;
    });
  }

  registerMonster() {
    if (this.monsterResult) {
      this._monstersService.addMonster(this.monsterResult);
      this.monsterSearch = new Monster();
      this.monsterResult = new Monster();
    }
  }

  ngOnDestroy() {
    if (this.monstersSubscription) this.monstersSubscription.unsubscribe();
  }

}
