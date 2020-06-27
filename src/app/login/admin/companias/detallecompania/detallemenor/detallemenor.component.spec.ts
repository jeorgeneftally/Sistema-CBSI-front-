import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemenorComponent } from './detallemenor.component';

describe('DetallemenorComponent', () => {
  let component: DetallemenorComponent;
  let fixture: ComponentFixture<DetallemenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
