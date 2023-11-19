import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})
export class RegistroProductoScreenComponent implements OnInit{

    //Aquí van las variables
    public editar:boolean = false;
    public user: any = {};

    //Para detectar errores
    public errors:any ={};

    constructor(
      private router: Router,
      private location: Location,
      private usuariosService: UsuariosService
    ) { }

    ngOnInit(): void {
      this.user = this.esquemaUser();
    console.log("User: ", this.user);
    
    }
    
    public regresar(){
      this.location.back();
    }
  
    public goHome(){
      this.router.navigate(["home"]);
    }
    public registrar(){
      //Validar
      this.errors = [];
  
      this.errors = this.usuariosService.validarUsuario(this.user, this.editar);
      if(!$.isEmptyObject(this.errors)){
        //Pasa la validación y sale de la función
        return false;
      }
      //Valida la contraseña
      if(this.user.password == this.user.confirmar_password){
        //Funcion para registrarse
        alert("Todo chido vamos a registrar");
      }else{
        alert("Las contraseñas no coinciden");
        this.user.password="";
        this.user.confirmar_password="";
      }
    }
  

    public esquemaUser(){
      return {
        'departamento': '',
        'nombre_producto': '',
        'id': '',
        'precio': '',
      }
    }
}
