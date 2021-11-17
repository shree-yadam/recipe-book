import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('amountInput') ingredientAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmount = this.ingredientAmountRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
