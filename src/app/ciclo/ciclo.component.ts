import {
  NgClass,
  NgFor,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css',
})
export class CicloComponent {
  persone = [
    { nome: 'Mario', cognome: 'Rossi', isOnline: true },
    { nome: 'Luigi', cognome: 'Verdi', isOnline: false },
    { nome: 'Pippo', cognome: 'Neri', isOnline: true },
  ];
  numero = 3;
}
