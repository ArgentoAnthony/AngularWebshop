import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentByProductComponent } from './get-comment-by-product.component';

describe('GetCommentByProductComponent', () => {
  let component: GetCommentByProductComponent;
  let fixture: ComponentFixture<GetCommentByProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCommentByProductComponent]
    });
    fixture = TestBed.createComponent(GetCommentByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
