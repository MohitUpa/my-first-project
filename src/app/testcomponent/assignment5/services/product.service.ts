import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getProductData() {
        return [
            {
                name: 'Man Shoe',
                price: '230$',
                color: 'red',
                size: '41',
                category: 'footware'
            }, {
                name: 'chair',
                price: '230$',
                color: 'red',
                size: '42',
                category: 'furniture'
            }, {
                name: 'Table',
                price: '230$',
                color: 'red',
                size: '43',
                category: 'furniture'
            }, {
                name: 'washing mashine',
                price: '230$',
                color: 'red',
                size: '44',
                category: 'electronic'
            }, {
                name: 'phone',
                price: '230$',
                color: 'red',
                size: '45',
                category: 'electronic'
            }, {
                name: 'refigirator',
                price: '230$',
                color: 'red',
                size: '46',
                category: 'electronic'
            }, {
                name: 'AC',
                price: '230$',
                color: 'red',
                size: '47',
                category: 'electronic'
            }, {
                name: 'Men Cloth',
                price: '230$',
                color: 'red',
                size: '48',
                category: 'cloth'
            }, {
                name: 'children cloth',
                price: '230$',
                color: 'red',
                size: '49',
                category: 'cloth'
            }, {
                name: 'winter cloths',
                price: '230$',
                color: 'red',
                size: '50',
                category: 'cloth'
            }
        ];
    }

}
