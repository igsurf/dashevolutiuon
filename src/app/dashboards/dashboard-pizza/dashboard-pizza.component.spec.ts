import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPizzaComponent } from './dashboard-pizza.component';

describe('DashboardPizzaComponent', () => {
  let component: DashboardPizzaComponent;
  let fixture: ComponentFixture<DashboardPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
