/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilmService } from './film.service';

describe('Service: Film', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmService]
    });
  });

  it('should ...', inject([FilmService], (service: FilmService) => {
    expect(service).toBeTruthy();
  }));
});
