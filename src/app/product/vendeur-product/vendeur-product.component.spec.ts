import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurProductComponent } from './vendeur-product.component';

describe('VendeurProductComponent', () => {
  let component: VendeurProductComponent;
  let fixture: ComponentFixture<VendeurProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendeurProductComponent]
    });
    fixture = TestBed.createComponent(VendeurProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
