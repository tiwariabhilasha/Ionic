import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetListsComponent } from './target-lists.component';

describe('TargetListsComponent', () => {
  let component: TargetListsComponent;
  let fixture: ComponentFixture<TargetListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
