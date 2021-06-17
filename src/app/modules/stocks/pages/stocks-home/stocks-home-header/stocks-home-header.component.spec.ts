import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksHomeHeaderComponent } from './stocks-home-header.component';

describe('StocksHomeHeaderComponent', () => {
  let component: StocksHomeHeaderComponent;
  let fixture: ComponentFixture<StocksHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksHomeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
