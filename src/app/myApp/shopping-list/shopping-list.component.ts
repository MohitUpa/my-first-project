import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 50),
    new Ingredient('Tomatos', 30),
    new Ingredient('Carrot', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  oningredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
