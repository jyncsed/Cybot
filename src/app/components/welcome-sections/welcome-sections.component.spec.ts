import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSectionsComponent } from './welcome-sections.component';

describe('WelcomeSectionsComponent', () => {
  let component: WelcomeSectionsComponent;
  let fixture: ComponentFixture<WelcomeSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
