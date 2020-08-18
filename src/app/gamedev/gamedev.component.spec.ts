import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedevComponent } from './gamedev.component';

describe('GamedevComponent', () => {
  let component: GamedevComponent;
  let fixture: ComponentFixture<GamedevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamedevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
