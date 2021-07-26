import { Injectable } from '@angular/core';
import { GameItemModel } from '../models/game-item';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private maxNumber: number = 6;


  getGameItemNumbers(): GameItemModel {
    const topNumber = Math.floor(Math.random() * this.maxNumber) + 1;
    const bottomNumber = Math.floor(Math.random() * this.maxNumber) + 1;

    return { topNumber, bottomNumber } as GameItemModel;
  }
}
