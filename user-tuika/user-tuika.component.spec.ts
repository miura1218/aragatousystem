import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTuikaComponent } from './user-tuika.component';

describe('UserTuikaComponent', () => {
  let component: UserTuikaComponent;
  let fixture: ComponentFixture<UserTuikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTuikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTuikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
