import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth : AngularFireAuth) {}

  crearUsuario(nombre: string, correo: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(correo, password).then((credenciales) => {
      console.log(credenciales);
    }).catch((error) => {
      console.log(error);
    })
  }
}
