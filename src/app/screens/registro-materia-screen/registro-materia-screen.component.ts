import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MateriaService } from 'src/app/services/materia.service';
declare var $:any;


@Component({
  selector: 'app-registro-materia-screen',
  templateUrl: './registro-materia-screen.component.html',
  styleUrls: ['./registro-materia-screen.component.scss'],
})
export class RegistroMateriaScreenComponent implements OnInit {

 //Variables del componente registro
 public editar: boolean = false;
 public materia:any = {};
 public nrcMateria: Number = 0;
 //Para detectar errores
 public errors:any ={};

 //Programas educativos
 public programas = ['Ingeniería en Tecnologías de la Información', 'Ingeniería en Ciencias de la Computación', 'Licenciatura en Ciencias de la Computación']


 constructor(
   private materiaService: MateriaService,
   public activatedRoute: ActivatedRoute,
   private router: Router,
   private location : Location
 ) { }

 ngOnInit(): void {
   this.materia = this.materiaService.esquemaUser();
   //El primer if valida si existe un parámetro en la URL
   if(this.activatedRoute.snapshot.params['nrc'] != undefined){
     this.editar = true;
     //Asignamos a nuestra variable global el valor del NRC que viene por la URL
     this.nrcMateria = this.activatedRoute.snapshot.params['nrc'];
     console.log("NRC Materia: ", this.nrcMateria);
     //Al iniciar la vista obtiene la materia por su NRC
     this.obtenerMateriaByNRC();
   }
   //Imprimir datos en consola
   console.log("Materia: ", this.materia);
 }

 //Función para obtener una sola materia por su NRC
 public obtenerMateriaByNRC(){
  this.materiaService.getMateria(this.nrcMateria).subscribe(
    (response)=>{
      this.materia = response;
      //Agregamos valores faltantes
      this.materia.nombre_nrc = response.materia.nombre_nrc;
      this.materia.nombre_materia = response.materia.nombre_materia;
      this.materia.nombre_seccion = response.materia.nombre_seccion;
      this.materia.nombre_dias = response.materia.nombre_dias;
      this.materia.nombre_hora_inicio = response.materia.nombre_hora_inicio;
      this.materia.nombre_hora_final = response.materia.nombre_hora_final;
      this.materia.programa_educativo = response.materia.programa_educativo;

      //this.materia.fecha_nacimiento = response.fecha_nacimiento.split("T")[0];
      console.log("Datos materia: ", this.materia);
    }, (error)=>{
      alert("No se pudieron obtener los datos de la materia para editar");
    }
  );
 }

 public regresar(){
   this.location.back();
 }

 public registrar(){
  //Validar
  this.errors = [];

  this.errors = this.materiaService.validarMateria(this.materia, this.editar);
  if(!$.isEmptyObject(this.errors)){
    return false;
  }

   //Aquí si todo es correcto vamos a registrar - aquí se manda a llamar al servicio
   this.materiaService.registrarMateria(this.materia).subscribe(
    (response)=>{
      alert("Materia registrada correctamente");
      console.log("Materia registrada: ", response);
      this.router.navigate(["home"]);
    }, (error)=>{
      alert("No se pudo registrar la materia");
    }
  )
}

 public actualizar(){
   //Validación
   this.errors = [];

   this.errors = this.materiaService.validarMateria(this.materia, this.editar);
   if(!$.isEmptyObject(this.errors)){
     return false;
   }
   console.log("Pasó la validación");

   this.materiaService.editarMateria(this.materia).subscribe(
     (response)=>{
       alert("Materia editada correctamente");
       console.log("Materia editada: ", response);
       //Si se editó, entonces mandar al home de materias
       this.router.navigate(["home-materias"]);
     }, (error)=>{
       alert("No se pudo editar materia");
     }
   );
 }
}
