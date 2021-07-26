import { TestBed } from '@angular/core/testing';
import { GameItem } from './game-item.component';

describe('GameItem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameItem
      ],
    }).compileComponents();
  });

  it('should create the game item', () => {
    const fixture = TestBed.createComponent(GameItem);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
