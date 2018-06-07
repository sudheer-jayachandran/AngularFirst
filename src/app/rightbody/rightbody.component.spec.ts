import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbodyComponent } from './rightbody.component';

describe('RightbodyComponent', () => {
  let component: RightbodyComponent;
  let fixture: ComponentFixture<RightbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
