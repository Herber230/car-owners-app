import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSingleViewComponent } from './car-single-view.component';

describe('CarSingleViewComponent', () => {
  let component: CarSingleViewComponent;
  let fixture: ComponentFixture<CarSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
