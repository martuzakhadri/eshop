import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private snackbar: MatSnackBar) {}

  AddToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.snackbar.open('item added to cart', 'ok', { duration: 3000 });
    console.log(this.cart.value);
  }

removeQuantity(item:CartItem):void{
  let itemForRemoval !: CartItem;
 let filteredItems =  this.cart.value.items.map((_item)=>{
    if(_item.id===item.id){
    _item.quantity--;
    if (_item.quantity === 0) {
       itemForRemoval = _item;
    }
  }
  return _item;
  });
  if(itemForRemoval)
  {
  filteredItems =   this.onItemremovefromcart(itemForRemoval,false)
  }
  this.cart.next ({items: filteredItems });
  this.snackbar.open('item removed', 'ok', { duration: 4000 });
}




  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  clearCart() {
    this.cart.next({ items: [] });
    this.snackbar.open('cart is cleared', 'ok', {
      duration: 5000,
    });
  }

  onItemremovefromcart(item: CartItem,update= true):CartItem[]{
    let filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if(update){
      this.cart.next({ items: filteredItems });
      this.snackbar.open('item removed', 'ok', { duration: 4000 });
    }   
    return filteredItems;
  }


}
