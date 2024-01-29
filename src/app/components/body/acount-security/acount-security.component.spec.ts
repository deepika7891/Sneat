import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountSecurityComponent } from './acount-security.component';

describe('AcountSecurityComponent', () => {
  let component: AcountSecurityComponent;
  let fixture: ComponentFixture<AcountSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcountSecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
