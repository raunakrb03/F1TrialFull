import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDriversComponent } from './update-drivers.component';

describe('UpdateDriversComponent', () => {
  let component: UpdateDriversComponent;
  let fixture: ComponentFixture<UpdateDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
