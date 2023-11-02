import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableCarListComponent } from './avaliable-car-list.component';

describe('AvaliableCarListComponent', () => {
  let component: AvaliableCarListComponent;
  let fixture: ComponentFixture<AvaliableCarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliableCarListComponent]
    });
    fixture = TestBed.createComponent(AvaliableCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
