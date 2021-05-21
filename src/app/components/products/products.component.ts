import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  orderForm: FormGroup;
  items: FormArray;
  checked: true;
  defaultSelect: number;
  labelProduct: string;
  selection: number = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [])
    });
    this.defaultSelect = 1;
  }

  createItem(): FormGroup {
    const name = this.productForm.controls['name'].value;
    const price = this.productForm.controls['price'].value;
    const description = this.productForm.controls['description'].value;
    const text = name +': $'+price
    return this.formBuilder.group({
      name: text
    });

  }

  addItem(): void {
    this.setLabel();
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    this.cleanForm();
  }

  setLabel() {
    if (this.selection === 1)
      this.labelProduct = 'Ingredientes';
    if (this.selection === 2)
      this.labelProduct = 'Complementos';
    if (this.selection === 3)
      this.labelProduct = 'Bebidas';
  }

  cleanForm() {
    this.productForm.controls['name'].setValue('');
    this.productForm.controls['price'].setValue(null);
    this.productForm.controls['description'].setValue('');
  }

}
