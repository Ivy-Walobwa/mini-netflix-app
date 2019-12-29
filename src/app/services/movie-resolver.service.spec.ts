import { TestBed } from '@angular/core/testing';

import { MovieResolverService } from './movie-resolver.service';

describe('MovieResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieResolverService = TestBed.get(MovieResolverService);
    expect(service).toBeTruthy();
  });
});
