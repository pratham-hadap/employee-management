import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeComponentComponent } from './emplyee-component.component';

describe('EmplyeeComponentComponent', () => {
  let component: EmplyeeComponentComponent;
  let fixture: ComponentFixture<EmplyeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmplyeeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
