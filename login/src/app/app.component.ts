import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Quotes';
  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/register']);
  }

  login () {
    this.router.navigate(['/login']);
  };
  ngOnInit() {}
}
