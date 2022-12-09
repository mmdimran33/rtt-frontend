import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoEComponent } from './co-e.component';

describe('CoEComponent', () => {
  let component: CoEComponent;
  let fixture: ComponentFixture<CoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
