import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialmayorComponent } from './materialmayor.component';

describe('MaterialmayorComponent', () => {
  let component: MaterialmayorComponent;
  let fixture: ComponentFixture<MaterialmayorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialmayorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialmayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
