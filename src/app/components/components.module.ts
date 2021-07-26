import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameItem } from './game-item/game-item.component';
import { GameItemHalf } from './game-item-half/game-item-half.component';


@NgModule({
  declarations: [
    GameItem,
    GameItemHalf
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GameItem
  ]
})
export class ComponentsModule { }