import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 123,
        id: 1,
        quantity: 23,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.dataSource);
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  clearAll() {
    this.cartService.clearCart();
    this.router.navigateByUrl('home');
  }
  OnRemoveFromCart(item: CartItem): void {
    this.cartService.onItemremovefromcart(item);
  }

  OnAddQuantity(item:CartItem):void{
this.cartService.AddToCart(item);
  }

  OnMinusQuantity(item:CartItem){
this.cartService.removeQuantity(item);
  }
}
