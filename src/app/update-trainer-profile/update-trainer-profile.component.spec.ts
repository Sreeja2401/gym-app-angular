import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainerProfileComponent } from './update-trainer-profile.component';

describe('UpdateTrainerProfileComponent', () => {
  let component: UpdateTrainerProfileComponent;
  let fixture: ComponentFixture<UpdateTrainerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTrainerProfileComponent]
    });
    fixture = TestBed.createComponent(UpdateTrainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
