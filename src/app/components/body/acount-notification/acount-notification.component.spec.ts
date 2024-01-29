import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountNotificationComponent } from './acount-notification.component';

describe('AcountNotificationComponent', () => {
  let component: AcountNotificationComponent;
  let fixture: ComponentFixture<AcountNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcountNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
