import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelListComponent } from './car-model-list.component';

describe('CarModelListComponent', () => {
  let component: CarModelListComponent;
  let fixture: ComponentFixture<CarModelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarModelListComponent]
    });
    fixture = TestBed.createComponent(CarModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
