import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Err404Component } from './err404.component';

describe('Err404Component', () => {
  let component: Err404Component;
  let fixture: ComponentFixture<Err404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Err404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Err404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
