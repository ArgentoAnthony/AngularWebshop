import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommandeByNumberComponent } from './get-commande-by-number.component';

describe('GetCommandeByNumberComponent', () => {
  let component: GetCommandeByNumberComponent;
  let fixture: ComponentFixture<GetCommandeByNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCommandeByNumberComponent]
    });
    fixture = TestBed.createComponent(GetCommandeByNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
