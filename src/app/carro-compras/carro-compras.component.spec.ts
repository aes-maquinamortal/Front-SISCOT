import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroComprasComponent } from './carro-compras.component';

describe('CarroComprasComponent', () => {
  let component: CarroComprasComponent;
  let fixture: ComponentFixture<CarroComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
