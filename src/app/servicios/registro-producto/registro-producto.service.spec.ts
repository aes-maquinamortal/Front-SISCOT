import { TestBed } from '@angular/core/testing';

import { RegistroProductoService } from './registro-producto.service';

describe('RegistroProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroProductoService = TestBed.get(RegistroProductoService);
    expect(service).toBeTruthy();
  });
});
