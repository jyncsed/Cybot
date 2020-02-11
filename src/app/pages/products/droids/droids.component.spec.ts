import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroidsComponent } from './droids.component';

describe('DroidsComponent', () => {
  let component: DroidsComponent;
  let fixture: ComponentFixture<DroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
