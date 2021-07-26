import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { GameItemModel } from './models/game-item';
import { GameServiceService } from './services/game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameItem: GameItemModel;
  scale: number = 0;
  speed: number = 0;
  rotate: number = 0;

  constructor(private readonly gameService: GameServiceService, private renderer: Renderer2) {
    this.gameItem = this.gameService.getGameItemNumbers();
  }
      
  newDamino() {
    this.gameItem = this.gameService.getGameItemNumbers();
    this.rotate = 0;
  }

  onScaleChange(event: MatSliderChange) {
    this.scale = event.value || 0;
  }

  onSpeedChange(event: MatSliderChange) {
    this.speed = event.value || 0;
  }

  onRotateEvent(type: string) {
    if (type === 'back') {
      this.rotate = this.rotate - 90;
    } else {
      this.rotate = this.rotate + 90;
    }
  }
}
