import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.model'

@Component({
  selector: 'app-product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})

export class ProductDepartmentComponent implements OnInit {
  product: Product;

  constructor() { }

  ngOnInit() {
  }
}
