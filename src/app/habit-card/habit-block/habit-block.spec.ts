import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitBlock } from './habit-block';

describe('HabitBlock', () => {
  let component: HabitBlock;
  let fixture: ComponentFixture<HabitBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
