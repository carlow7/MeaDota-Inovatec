import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroanimalComponent } from './cadastroanimal.component';

describe('CadastroanimalComponent', () => {
  let component: CadastroanimalComponent;
  let fixture: ComponentFixture<CadastroanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroanimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
