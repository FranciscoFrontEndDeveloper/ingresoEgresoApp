import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  crearUsuario(): void {
    if (this.formRegister.invalid) {
      this.router.navigate(['/register']);
      return;
    } else {
      const { nombre, correo, password } = this.formRegister.value;
      this.authService.crearUsuario(nombre, correo, password)
      this.router.navigate(['/']);
    }
  }
}
