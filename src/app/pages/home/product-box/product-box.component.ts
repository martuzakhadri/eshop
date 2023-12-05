import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {

  @Input() fullwidth = false;
 @Input() product:Product |undefined;
@Output() AddToCart = new EventEmitter();

  constructor(){}

  onAddToCart(){
this.AddToCart.emit(this.product);
  }
}
