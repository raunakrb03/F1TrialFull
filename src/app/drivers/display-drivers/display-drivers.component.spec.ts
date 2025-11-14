import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDriversComponent } from './display-drivers.component';

describe('DisplayDriversComponent', () => {
  let component: DisplayDriversComponent;
  let fixture: ComponentFixture<DisplayDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
