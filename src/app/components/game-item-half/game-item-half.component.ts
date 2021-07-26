import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-item-half',
  templateUrl: './game-item-half.component.html',
  styleUrls: ['./game-item-half.component.scss']
})
export class GameItemHalf {
  isEven: boolean = false;
  maxNumbers: number[] = [0, 1, 2];
  numbers: number[] = [];

  _gamePoint: number = 0;
  get gamePoint(): number {
    return this._gamePoint;
  }
  @Input() set gamePoint(value: number) {
    this._gamePoint = value;
    this.updatePoints();
  }

  private updatePoints() {
    this.isEven = this.gamePoint % 2 === 0;
    this.numbers = Array.from({ length: this.gamePoint/2 }, (v, k) => k);
  }
}
