import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArigatoOkuruComponent } from './arigato-okuru.component';

describe('ArigatoOkuruComponent', () => {
  let component: ArigatoOkuruComponent;
  let fixture: ComponentFixture<ArigatoOkuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArigatoOkuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArigatoOkuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
