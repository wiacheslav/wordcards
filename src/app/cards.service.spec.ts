/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsService]
    });
  });

  it('should ...', inject([CardsService], (service: CardsService) => {
    expect(service).toBeTruthy();
  }));
});
