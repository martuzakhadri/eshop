import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';



const  ROWS_HEIGHT :{[id :number]: number }  = {1:400,3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{
category !:string;
cols=3;
rowHeight =ROWS_HEIGHT[this.cols];
products:Array<Product> |undefined;
sort = 'desc';
count = '12';
productSubscription: Subscription | undefined;

constructor(private cartservice:CartService,private storeservice:ApiService){}
 


ngOnInit():void{
this.getProducts();
}
// getProducts(){
//  this.productSubscription =  this.storeservice.getAllProducts(this.count,this.sort,this.category)
//   .subscribe((_products)=>{
//     this.products = _products;
//   })
// }
getProducts(): void {
  this.productSubscription = this.storeservice
    .getAllProducts(this.count, this.sort, this.category)
    .subscribe((_products) => {
      this.products = _products;
    });
}

  oncolumscountchange(count:number):void{
   this.cols = count;
   this.rowHeight = ROWS_HEIGHT[this.cols];

  }
  onshowcategory(newcategory:string):void{
    this.category = newcategory;
    this.getProducts();
  }
  onAddToCart(product:Product):void{
    return this.cartservice.AddToCart({
      product: product.image,
      name:product.title,
      price:product.price,
      quantity:1,
      id:product.id
    })

  }

  ngOnDestroy(): void {
   if(this.productSubscription){
    this.productSubscription.unsubscribe();
   }
  }

  // OnItemsCountChange(count:number):void{
  //   this.count = count.toString();
  //   this.getProducts();

  // }
  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }
  OnSortChange(newsort:string):void{
this.sort =newsort;
this.getProducts();
  }
}
