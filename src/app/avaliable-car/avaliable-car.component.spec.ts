import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableCarComponent } from './avaliable-car.component';

describe('AvaliableCarComponent', () => {
  let component: AvaliableCarComponent;
  let fixture: ComponentFixture<AvaliableCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliableCarComponent]
    });
    fixture = TestBed.createComponent(AvaliableCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
