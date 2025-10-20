import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseSpotComponent } from './reverse-spot.component';

describe('ReverseSpotComponent', () => {
  let component: ReverseSpotComponent;
  let fixture: ComponentFixture<ReverseSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseSpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
