import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesinAngularComponent } from './directivesin-angular.component';

describe('DirectivesinAngularComponent', () => {
  let component: DirectivesinAngularComponent;
  let fixture: ComponentFixture<DirectivesinAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesinAngularComponent]
    });
    fixture = TestBed.createComponent(DirectivesinAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
