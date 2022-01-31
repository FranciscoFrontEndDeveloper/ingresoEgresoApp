import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  crearUsuario(nombre: string, correo: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(correo, password)
      .then((credenciales) => {
        console.log(credenciales);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.messge,
        });
      });
  }

  loguearUsuario(correo: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(correo, password)
      .then((credenciales) => {
        console.log(credenciales);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.messge,
        });
      });
  }
}
