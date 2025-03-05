import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductService, Product } from '../../../services/product.service';
// import { CartTemplateComponent } from '../../cart/cart-template/';

@Component({
  standalone: true,
  imports: [RouterModule, NgFor, IonicModule],
  selector: 'cart-template',
  templateUrl: './cart-template.component.html',
  styleUrls: ['./cart-template.component.scss'],
})
export class CartTemplateComponent  implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
