import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Este import es para los servicios HTTP
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
//Pantallas
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
//Cambia el idioma a español
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RegistroProductoScreenComponent } from './screens/registro-producto-screen/registro-producto-screen.component';
//ngx mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EliminarUserModalComponent } from './modals/eliminar-user-modal/eliminar-user-modal.component';
import { RegistroMateriaScreenComponent } from './screens/registro-materia-screen/registro-materia-screen.component';
import { HomeMateriasScreenComponent } from './screens/home-materias-screen/home-materias-screen.component';
import { EliminarMateriaModalComponent } from './modals/eliminar-materia-modal/eliminar-materia-modal.component';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule
({
  declarations: 
  [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    RegistroProductoScreenComponent,
    EliminarUserModalComponent,
    RegistroMateriaScreenComponent,
    HomeMateriasScreenComponent,
    EliminarMateriaModalComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxMaskModule.forRoot(options),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers:
  [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }