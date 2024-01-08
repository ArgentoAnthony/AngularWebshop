import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneComponent } from './get-one.component';

describe('GetOneComponent', () => {
  let component: GetOneComponent;
  let fixture: ComponentFixture<GetOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOneComponent]
    });
    fixture = TestBed.createComponent(GetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
