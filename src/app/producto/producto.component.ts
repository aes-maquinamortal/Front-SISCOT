import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() nombre: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  constructor() { }

  ngOnInit() {
  }

}
