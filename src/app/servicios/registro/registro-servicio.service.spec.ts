import { TestBed } from '@angular/core/testing';

import { RegistroServicioService } from './registro-servicio.service';

describe('RegistroServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroServicioService = TestBed.get(RegistroServicioService);
    expect(service).toBeTruthy();
  });
});
