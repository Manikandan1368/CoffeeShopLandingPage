import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {


  orderForm: FormGroup;
  orders: any[] = [];

  coffeeItems = [
    { name: 'Espresso', price: 3 },
    { name: 'Velvet Crema', price: 4 },
    { name: 'Gourmet Blend', price: 4.5 },
    { name: 'Mocha Float', price: 5 },
    { name: 'Latte', price: 4 },
    { name: 'Mocha', price: 4.5 },
    { name: 'Cold Brew', price: 4.5 },
    { name: 'Cappuccino', price: 4.5 },
    { name: 'Americano', price: 3.5 },
  ];

  calculatedPrice = 0;

  constructor(private fb: FormBuilder, private router: Router) {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      item: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [{ value: 0, disabled: true }]
    });

    this.onChanges();
  }

  onChanges() {
    this.orderForm.get('item')!.valueChanges.subscribe(() => this.updatePrice());
    this.orderForm.get('quantity')!.valueChanges.subscribe(() => this.updatePrice());
  }

  updatePrice() {
    const selectedItemName = this.orderForm.get('item')!.value;
    const quantity = this.orderForm.get('quantity')!.value || 1;
    const selectedItem = this.coffeeItems.find(i => i.name === selectedItemName);

    if (selectedItem) {
      const total = selectedItem.price * quantity;
      this.calculatedPrice = total;
      this.orderForm.get('price')!.setValue(total);
    }
  }

addOrder() {
  if (this.orderForm.valid) {
    const formValue = this.orderForm.getRawValue(); 

    const order = {
      customerName: formValue.customerName,
      item: formValue.item,
      quantity: formValue.quantity,
      total: formValue.price,
      timestamp: new Date()
    };

    this.orders.push(order);
    this.orderForm.reset();
    alert("Order successfully created..!");
  }
}

 goHome(): void {
    this.router.navigate(['']);
  }
}
