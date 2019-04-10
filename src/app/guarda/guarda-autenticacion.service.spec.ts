import { TestBed } from '@angular/core/testing';

import { GuardaAutenticacionService } from './guarda-autenticacion.service';

describe('GuardaAutenticacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaAutenticacionService = TestBed.get(GuardaAutenticacionService);
    expect(service).toBeTruthy();
  });
});
