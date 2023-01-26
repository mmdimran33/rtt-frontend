import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCommerceComponent } from './digital-commerce.component';

describe('DigitalCommerceComponent', () => {
  let component: DigitalCommerceComponent;
  let fixture: ComponentFixture<DigitalCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalCommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
