import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-services',
  templateUrl: './product-services.component.html',
  styleUrls: ['./product-services.component.css']
})
export class ProductServicesComponent implements OnInit {

  toggleProduct = false;
  productData = [];
  productData1 = [];
  productCatName = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productData = this.productService.getProductData();
    const key = 'category';
    const arrayUniqueByKey = [...new Map(this.productData.map(item =>
      [item[key], item])).values()];
    this.productCatName = arrayUniqueByKey;
  }

  showProduct(values: any) {
    console.log(values);
    this.toggleProduct = true;
    this.productData1 = this.productData.filter(item => item.category === values);
    console.log(this.productData1);
  }
}
