import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtoiawaseComponent } from './otoiawase.component';

describe('OtoiawaseComponent', () => {
  let component: OtoiawaseComponent;
  let fixture: ComponentFixture<OtoiawaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtoiawaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtoiawaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
