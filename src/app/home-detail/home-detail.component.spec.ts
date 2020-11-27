import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeDetailComponent } from './home-detail.component';

describe('HomeDetailComponent', () => {
  let component: HomeDetailComponent;
  let fixture: ComponentFixture<HomeDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
