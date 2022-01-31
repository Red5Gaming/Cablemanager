import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModelComponent } from './component-model.component';

describe('ComponentModelComponent', () => {
  let component: ComponentModelComponent;
  let fixture: ComponentFixture<ComponentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
