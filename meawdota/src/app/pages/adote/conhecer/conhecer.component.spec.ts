import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecerComponent } from './conhecer.component';

describe('ConhecerComponent', () => {
  let component: ConhecerComponent;
  let fixture: ComponentFixture<ConhecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConhecerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
