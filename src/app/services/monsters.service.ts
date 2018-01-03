import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';

import { Constants } from './constants';
import Monster from '../models/Monster';

@Injectable()
export class MonstersService {

  private monsters : Array<Monster> = [
    new Monster('Kobold', 'Humanoid', 'Medium'),
    new Monster('Adult Blue Dragon', 'Dragon', 'Huge'),
    new Monster('Langderosa Cyanwrath', 'Half-Dragon', 'Medium'),
  ];

  private monsterData: BehaviorSubject<Array<Monster>> = new BehaviorSubject(this.monsters);

  constructor(private http: HttpClient) {
  }

  getMonsters(): BehaviorSubject<Array<Monster>> {
    return this.monsterData;
  }

  getMonsterById(monsterId: String) {
    return this.http.get(`${Constants.API_URL}/monsters/${monsterId}`).toPromise();
  }

  getMonsterByName(monsterName: String) {
    const monsterNameArray: String = monsterName.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("+");
      console.log("monsterNameArray", `${Constants.API_URL}/monsters/?name=${monsterNameArray}`);
    return this.http.get(`${Constants.API_URL}/monsters/?name=${monsterNameArray}`).toPromise();
  }

  getMonsterByUrl(monsterUrl: string) {
    return this.http.get(monsterUrl);
  }

  addMonster(monster: Monster) {
    console.log('monster adding', monster);
    this.monsters.push(monster);
    this.monsterData.next(this.monsters);
  }
}
