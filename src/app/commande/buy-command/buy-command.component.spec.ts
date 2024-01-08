import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCommandComponent } from './buy-command.component';

describe('BuyCommandComponent', () => {
  let component: BuyCommandComponent;
  let fixture: ComponentFixture<BuyCommandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyCommandComponent]
    });
    fixture = TestBed.createComponent(BuyCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
