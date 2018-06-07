import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualclassComponent } from './virtualclass.component';

describe('VirtualclassComponent', () => {
  let component: VirtualclassComponent;
  let fixture: ComponentFixture<VirtualclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
