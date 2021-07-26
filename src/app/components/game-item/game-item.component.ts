import { Component, HostBinding, Input, SimpleChanges } from '@angular/core';
import { GameItemModel } from 'src/app/models/game-item';

@Component({
  selector: 'game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItem {
  topNumber: number = 0;
  bottomNumber: number = 0;
  private transform = 'scale(1)';
  private transition = 'all 1s ease-out';
  
  @Input() gameItem: GameItemModel = {} as GameItemModel;
  @Input() scale: number | null = 0;
  @Input() speed: number | null = 0;
  @Input() rotate: number | null = 0;


  ngOnChanges({ gameItem }: SimpleChanges) {
    this.topNumber = gameItem?.currentValue.topNumber;
    this.bottomNumber = gameItem?.currentValue.bottomNumber;
    
    const scaleValue = this.scale && this.scale >= 10 ? 99 : this.scale;
    const transitionValue = this.speed && this.speed >= 10 ? 99 : this.speed;
    
    this.transform = `scale(1.0${scaleValue}) rotate(${this.rotate}deg)`;
    this.transition = `all .${transitionValue}s ease-out`
  }

  @HostBinding("style.transform") get getTransform(){
    return this.transform;
  }

  @HostBinding("style.transition") get getTransition(){
    return this.transition;
  }
}
