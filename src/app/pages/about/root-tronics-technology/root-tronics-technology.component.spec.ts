import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootTronicsTechnologyComponent } from './root-tronics-technology.component';

describe('RootTronicsTechnologyComponent', () => {
  let component: RootTronicsTechnologyComponent;
  let fixture: ComponentFixture<RootTronicsTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootTronicsTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootTronicsTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
