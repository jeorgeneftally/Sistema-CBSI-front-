import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallebomberoComponent } from './detallebombero.component';

describe('DetallebomberoComponent', () => {
  let component: DetallebomberoComponent;
  let fixture: ComponentFixture<DetallebomberoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallebomberoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallebomberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
