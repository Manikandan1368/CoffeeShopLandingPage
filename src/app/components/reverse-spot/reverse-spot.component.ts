import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reverse-spot',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reverse-spot.component.html',
  styleUrl: './reverse-spot.component.css'
})
export class ReverseSpotComponent implements OnInit {
  reserveForm!: FormGroup;
  reservations: any[] = [];
  isEditing = false;
  editingIndex: number | null = null;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.reserveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.reserveForm.invalid) {
      this.reserveForm.markAllAsTouched();
      return;
    }

    const formValue = this.reserveForm.value;

    if (this.isEditing && this.editingIndex !== null) {
      this.reservations[this.editingIndex] = formValue;
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.reservations.push(formValue);
    }

    this.reserveForm.reset();
  }

  deleteReservation(index: number): void {
    this.reservations.splice(index, 1);

    if (this.editingIndex === index) {
      this.reserveForm.reset();
      this.isEditing = false;
      this.editingIndex = null;
    }
  }

  goHome(): void {
    this.router.navigate(['']);
  }
  editReservation(index: number): void {
    const res = this.reservations[index];
    this.reserveForm.patchValue(res);
    this.isEditing = true;
    this.editingIndex = index;
  }

  cancelEdit(): void {
    this.reserveForm.reset();
    this.isEditing = false;
    this.editingIndex = null;
  }
}
