import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecommandationComponent } from './get-recommandation.component';

describe('GetRecommandationComponent', () => {
  let component: GetRecommandationComponent;
  let fixture: ComponentFixture<GetRecommandationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRecommandationComponent]
    });
    fixture = TestBed.createComponent(GetRecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
