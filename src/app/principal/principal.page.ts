import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage  {
  Nombre: string;
  constructor(private act:ActivatedRoute,private menu: MenuController) {
    this.Nombre = this.act.snapshot.paramMap.get('nombre');
  }

  openmenu(){
    this.menu.toggle();
  }
}







