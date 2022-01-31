import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo:   ['', Validators.required , Validators.email],
      password: ['', Validators.required]
    });
  }

  loguearUsuario(): void {
    if (this.formLogin.invalid) {
      return;
    }
    const { correo, password } = this.formLogin.value;
    this.authService.loguearUsuario(correo, password);
    this.router.navigate(['/']);
  }
}
