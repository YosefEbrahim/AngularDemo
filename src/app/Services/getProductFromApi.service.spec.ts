/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetProductFromApiService } from './getProductFromApi.service';

describe('Service: GetProductFromApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetProductFromApiService]
    });
  });

  it('should ...', inject([GetProductFromApiService], (service: GetProductFromApiService) => {
    expect(service).toBeTruthy();
  }));
});
