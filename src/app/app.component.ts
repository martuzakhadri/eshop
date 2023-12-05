import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Eshop';
  cart: Cart = {items: []}

  constructor(private cartserice:CartService){}
  
  ngOnInit(){
    this.cartserice.cart.subscribe((cart)=>{
      this.cart = cart;
    })
  }
}
