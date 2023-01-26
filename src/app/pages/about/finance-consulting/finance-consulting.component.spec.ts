import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceConsultingComponent } from './finance-consulting.component';

describe('FinanceConsultingComponent', () => {
  let component: FinanceConsultingComponent;
  let fixture: ComponentFixture<FinanceConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
