import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentsComponent } from './my-rents.component';

describe('MyRentsComponent', () => {
  let component: MyRentsComponent;
  let fixture: ComponentFixture<MyRentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRentsComponent]
    });
    fixture = TestBed.createComponent(MyRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
