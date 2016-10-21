/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PollApiService } from './poll-api.service';

describe('Service: PollApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollApiService]
    });
  });

  it('should ...', inject([PollApiService], (service: PollApiService) => {
    expect(service).toBeTruthy();
  }));
});
