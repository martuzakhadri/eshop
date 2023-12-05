import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {
@Output() columnsCountChange = new EventEmitter<number>();
@Output() ItemsCountChange = new EventEmitter<number>();
@Output() SortChange = new EventEmitter<string>();
  sort='desc';
  itemsShowcount=12;
  ngOnInit(){

  }
  onsortupdated(newsort:string):void{
    this.sort= newsort;
    this.SortChange.emit(newsort)
  }
  onItemUpdated(count:number):void{
this.itemsShowcount = count;
this.ItemsCountChange.emit(count);
  }

  onColumnUpdated(colsNum:number):void{
this.columnsCountChange.emit(colsNum);
  }
}
