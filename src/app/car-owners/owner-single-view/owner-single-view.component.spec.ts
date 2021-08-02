import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSingleViewComponent } from './owner-single-view.component';

describe('OwnerSingleViewComponent', () => {
  let component: OwnerSingleViewComponent;
  let fixture: ComponentFixture<OwnerSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
