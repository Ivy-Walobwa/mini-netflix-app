import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoviDetailsComponent } from './movi-details.component';

describe('MoviDetailsComponent', () => {
  let component: MoviDetailsComponent;
  let fixture: ComponentFixture<MoviDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
