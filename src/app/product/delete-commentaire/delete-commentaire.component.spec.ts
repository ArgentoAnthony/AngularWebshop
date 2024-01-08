import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCommentaireComponent } from './delete-commentaire.component';

describe('DeleteCommentaireComponent', () => {
  let component: DeleteCommentaireComponent;
  let fixture: ComponentFixture<DeleteCommentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCommentaireComponent]
    });
    fixture = TestBed.createComponent(DeleteCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
