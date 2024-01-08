import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendeurComponent } from './update-vendeur.component';

describe('UpdateVendeurComponent', () => {
  let component: UpdateVendeurComponent;
  let fixture: ComponentFixture<UpdateVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVendeurComponent]
    });
    fixture = TestBed.createComponent(UpdateVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
