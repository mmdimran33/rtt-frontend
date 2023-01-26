import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyInnovationComponent } from './technology-innovation.component';

describe('TechnologyInnovationComponent', () => {
  let component: TechnologyInnovationComponent;
  let fixture: ComponentFixture<TechnologyInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyInnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
