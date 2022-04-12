import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  value = 'Login - Hola Mundo'

  constructor() { }

  ngOnInit(): void {
  }

}
