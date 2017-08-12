import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAuditoriaComponent } from './lista-auditoria.component';

describe('ListaAuditoriaComponent', () => {
  let component: ListaAuditoriaComponent;
  let fixture: ComponentFixture<ListaAuditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAuditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
