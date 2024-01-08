import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendeurComponent } from './create-vendeur.component';

describe('CreateVendeurComponent', () => {
  let component: CreateVendeurComponent;
  let fixture: ComponentFixture<CreateVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVendeurComponent]
    });
    fixture = TestBed.createComponent(CreateVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
