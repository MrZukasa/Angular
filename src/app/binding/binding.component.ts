import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule, NgIf],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  twoway = 'twoway';
  isVisible = false;
  isVisibleRef = false;
  onClick(e: any) {
    console.log(e);
  }
  onInput(e: Event) {
    console.log((e.target as HTMLInputElement).value);
  }
}
