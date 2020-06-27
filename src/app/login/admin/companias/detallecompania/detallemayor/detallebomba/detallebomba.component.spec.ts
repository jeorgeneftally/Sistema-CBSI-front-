import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallebombaComponent } from './detallebomba.component';

describe('DetallebombaComponent', () => {
  let component: DetallebombaComponent;
  let fixture: ComponentFixture<DetallebombaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallebombaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallebombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
