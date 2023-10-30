import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountTraineeNavbarComponent } from './myaccount-trainee-navbar.component';

describe('MyaccountTraineeNavbarComponent', () => {
  let component: MyaccountTraineeNavbarComponent;
  let fixture: ComponentFixture<MyaccountTraineeNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaccountTraineeNavbarComponent]
    });
    fixture = TestBed.createComponent(MyaccountTraineeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
