import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConaComponent } from './cona.component';

describe('ConaComponent', () => {
  let component: ConaComponent;
  let fixture: ComponentFixture<ConaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
