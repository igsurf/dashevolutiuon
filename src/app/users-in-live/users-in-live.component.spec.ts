import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInLiveComponent } from './users-in-live.component';

describe('UsersInLiveComponent', () => {
  let component: UsersInLiveComponent;
  let fixture: ComponentFixture<UsersInLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
