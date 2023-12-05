import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit,OnDestroy {
@Output() showcategory = new EventEmitter<string>();
categoriesSubscription !:Subscription;
  categories = ['shoes','sports']
  constructor(private storeService:ApiService){}
 
  
  ngOnInit():void{
    this.categoriesSubscription = this.storeService
    .getAllcategories()
    .subscribe((response: Array<string>) => {
      this.categories = response;
    });
  }
  onshowcategory(category:string):void{
this.showcategory.emit(category);
  }
  ngOnDestroy(): void {
   if(this.categoriesSubscription){
    this.categoriesSubscription.unsubscribe();
   }
  }
}
