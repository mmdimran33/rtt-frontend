import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessAlliancesComponent } from './bussiness-alliances.component';

describe('BussinessAlliancesComponent', () => {
  let component: BussinessAlliancesComponent;
  let fixture: ComponentFixture<BussinessAlliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessAlliancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessAlliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
