import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RookCardComponent } from './rook-card.component';

describe('RookCardComponent', () => {
  let component: RookCardComponent;
  let fixture: ComponentFixture<RookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RookCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
