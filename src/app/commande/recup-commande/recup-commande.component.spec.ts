import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupCommandeComponent } from './recup-commande.component';

describe('RecupCommandeComponent', () => {
  let component: RecupCommandeComponent;
  let fixture: ComponentFixture<RecupCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecupCommandeComponent]
    });
    fixture = TestBed.createComponent(RecupCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
