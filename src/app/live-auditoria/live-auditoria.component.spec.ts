import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuditoriaComponent } from './live-auditoria.component';

describe('LiveAuditoriaComponent', () => {
  let component: LiveAuditoriaComponent;
  let fixture: ComponentFixture<LiveAuditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAuditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
