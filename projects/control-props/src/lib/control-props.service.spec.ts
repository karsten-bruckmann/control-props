import { TestBed } from '@angular/core/testing';

import { ControlPropsService } from './control-props.service';

describe('ControlPropsService', () => {
  let service: ControlPropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlPropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
