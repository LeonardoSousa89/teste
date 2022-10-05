import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should be increments 1', () => {

    componente :ComponentComponent
    
    expect( component.incrementsEmpty()).toBe(1);
  });

  it('(U) should be decrements -1', () => {

    componente :ComponentComponent

    expect( component.incrementsEmpty()).toBeGreaterThan(-1);
  });
});
