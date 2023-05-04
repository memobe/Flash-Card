import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'flash-card-word-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.scss'],
})
export class WordFormComponent {
  form = this.fb.group({
    name: ['', [Validators.required]],
    sentence: ['', [Validators.required]],
  })

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
  }

  submit(): void {
    if (this.form.valid) {
      this.router.navigateByUrl('')
    }
  }
}
