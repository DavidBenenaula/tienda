import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalles',
  imports: [NgIf],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  removeFromCart(): void {
    if (this.product) {
      this.cartService.removeFromCart(this.product.id);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
  
}