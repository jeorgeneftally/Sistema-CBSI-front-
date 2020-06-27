import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecompaniaComponent } from './detallecompania.component';

describe('DetallecompaniaComponent', () => {
  let component: DetallecompaniaComponent;
  let fixture: ComponentFixture<DetallecompaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallecompaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
