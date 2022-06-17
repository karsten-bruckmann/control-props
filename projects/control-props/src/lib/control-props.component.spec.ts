import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPropsComponent } from './control-props.component';

describe('ControlPropsComponent', () => {
  let component: ControlPropsComponent;
  let fixture: ComponentFixture<ControlPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
