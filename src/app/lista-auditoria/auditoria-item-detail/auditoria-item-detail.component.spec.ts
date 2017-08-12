import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaItemDetailComponent } from './auditoria-item-detail.component';

describe('AuditoriaItemDetailComponent', () => {
  let component: AuditoriaItemDetailComponent;
  let fixture: ComponentFixture<AuditoriaItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
