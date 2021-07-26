import { TestBed } from '@angular/core/testing';
import { GameItemHalf } from './game-item-half.component';

describe('GameItemHalf', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GameItemHalf
      ],
    }).compileComponents();
  });

  it('should create the game item', () => {
    const fixture = TestBed.createComponent(GameItemHalf);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
