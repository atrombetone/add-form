import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FprincipalComponent } from './fprincipal.component';

describe('FprincipalComponent', () => {
  let component: FprincipalComponent;
  let fixture: ComponentFixture<FprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
