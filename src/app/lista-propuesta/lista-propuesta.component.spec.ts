import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropuestaComponent } from './lista-propuesta.component';

describe('ListaPropuestaComponent', () => {
  let component: ListaPropuestaComponent;
  let fixture: ComponentFixture<ListaPropuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPropuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
