import { TestBed } from '@angular/core/testing';

import { ListaProductosService } from './lista-productos.service';

describe('ListaProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaProductosService = TestBed.get(ListaProductosService);
    expect(service).toBeTruthy();
  });
});
