import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { CombatComponent } from './combat/combat.component';
import { PlayersComponent } from './players/players.component';
import { MonstersComponent } from './monsters/monsters.component';


@NgModule({
  declarations: [
    CombatComponent,
    PlayersComponent,
    MonstersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    CombatComponent,
    PlayersComponent,
    MonstersComponent
  ]
})
export class ComponentsModule { }
