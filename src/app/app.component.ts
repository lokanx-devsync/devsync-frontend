import { Component } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  template: `
  <!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <img 
      width="300" 
      alt="Angular Logo" 
      [src]="logoUrl">
  </div>
  <div style="text-align:center">
    <h2>Here are something that help you getting started</h2>
    <fa-icon [icon]="['fas', 'coffee']"></fa-icon>
  </div>
  
  <router-outlet></router-outlet>
    `
})
export class AppComponent {
  // tslint:disable-next-line:max-line-length
  private static readonly LOGO_URL: string = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";

  logoUrl: SafeUrl = "";
  title: string = "Devsync";

  constructor(private sanitizer: DomSanitizer) {
    this.logoUrl = sanitizer.bypassSecurityTrustUrl(AppComponent.LOGO_URL);
  }
  
}
