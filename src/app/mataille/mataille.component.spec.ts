import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatailleComponent } from './mataille.component';

describe('MatailleComponent', () => {
  let component: MatailleComponent;
  let fixture: ComponentFixture<MatailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
