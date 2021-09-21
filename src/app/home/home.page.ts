import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string;
  constructor(private ruter: Router,public alerta: AlertController) {}

  public ingresar(){
    this.ruter.navigate(['/principal',
    {nombre:this.nombre}]);
    }

    async recuperar() {
      const alert = await this.alerta.create({
        header: 'Recuperacion',
        message: 'Un Correo fue enviado para restablecer su contraseña',
        buttons: ['OK']
      });
      await alert.present();
    }

}
