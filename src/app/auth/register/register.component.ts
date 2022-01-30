import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:   ['', Validators.required],
      correo:   ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  crearUsuario(): void{
    console.log(this.formLogin);
  }
}
