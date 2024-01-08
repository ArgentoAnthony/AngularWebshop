import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoDeleteCommentComponent } from './modo-delete-comment.component';

describe('ModoDeleteCommentComponent', () => {
  let component: ModoDeleteCommentComponent;
  let fixture: ComponentFixture<ModoDeleteCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModoDeleteCommentComponent]
    });
    fixture = TestBed.createComponent(ModoDeleteCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
