import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProvaComponent } from "./prova/prova.component";
import { BindingComponent } from "./binding/binding.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProvaComponent, BindingComponent]
})
export class AppComponent {
  title = 'Angular';
}
