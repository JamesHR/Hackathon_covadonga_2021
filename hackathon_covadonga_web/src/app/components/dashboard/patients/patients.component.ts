import { Component, OnInit, ViewChild } from '@angular/core';


import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AllServicesService } from '../../../services/all-services.service';
import { SelectionModel } from '@angular/cdk/collections';

import { Patients } from 'src/app/models/patients';
import { PatientsFormComponent } from './patients-form/patients-form.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  estado : number = 1;
  filtro: number = 1;
  
  opcionCrud: string = "agregar";
  btnCrud: boolean = true;
  
  patient: Patients ={
   
  }

  ELEMENT_DATA!: Patients[];
  
  displayedColumns: string[] = ['select', 'curp', 'name', 'email'];
  dataSource = new MatTableDataSource<Patients>(this.ELEMENT_DATA);
  selection = new SelectionModel<Patients>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private allServices:AllServicesService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.cargarpatients(this.filtro);
    this.cargarpatients();
  }

  // -----------------------------------------------------
  limpiarObjeto(){
    this.patient ={

    }
  }
 
  aplicarFiltro() {
    this.filtro = this.estado;
    // this.cargarpatients(this.filtro);
    this.cargarpatients();
    this.limpiarbtnCrud();
  }
  

   public cargarpatients(){
    let resp = this.allServices.getPatients();
    resp.subscribe(resp=> this.dataSource.data=resp as Patients[]);
  }

  
  agregar(){
    this.opcionCrud = "agregar";
    const dialogRef = this.dialog.open(PatientsFormComponent, {
      data: { patient: this.patient, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.patient.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.postPatient( this.patient)
              .subscribe( 
                          resp => {
                          this.openSnackBar( 'Se agrego ', this.patient.idPatient);
                          // console.log('Respuesta', resp.idpatient)
                          // this.cargarpatients(1); 
                          this.cargarpatients(); 

                          this.aplicarFiltro();
                          this.limpiarObjeto();
                          }
                         , error => {
                          if(error.status == '4001'){

                            console.log(error.status);
                            this.openSnackBar('Ya existe ', this.patient.idPatient);
                          }
                          else{
                            console.log('error inesperado');
                            console.log(this.patient);
                          }
                         }               
              )              
          }
        }
      }
    )
  }

  editar(){
    this.patient = this.selection.selected[0];
    this.opcionCrud = "editar";
    const dialogRef = this.dialog.open(PatientsFormComponent, {
      data: { patient: this.patient, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.patient.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.putPatient(this.patient)
              .subscribe( resp => {
                this.openSnackBar( 'Se edito ', this.patient.idPatient);
                console.log('Respuesta', resp)
                this.aplicarFiltro();
                // this.cargarpatients(1); 
                this.limpiarObjeto();
              })
              
          }
        }
      }
    )
  }

  eliminar(){
    this.patient = this.selection.selected[0];
    //  console.log(this.patient);
     this.opcionCrud = "eliminar";
     const dialogRef = this.dialog.open(PatientsFormComponent, {
      data: { patient: this.patient, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.patient.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.deletePatient( this.patient.idPatient)
              .subscribe( resp => {
                this.openSnackBar( 'Se elimino ', this.patient.idPatient);
                console.log('Respuesta', resp)
                this.aplicarFiltro();
                this.limpiarObjeto();
              })
            }
          }
      }
    )
  } 

  verDetalle(){
    this.patient = this.selection.selected[0];
    //  console.log(this.patient);
     this.opcionCrud = "detalle";
     const dialogRef = this.dialog.open(PatientsFormComponent, {
      data: { patient: this.patient, opcionCrud: this.opcionCrud }
    });
    this.limpiarObjeto();
  }

  // -----------------------------------------------------
  // -----------------------------------------------------

  limpiarbtnCrud(){
    this.btnCrud = true;
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000});
  }

   // metodo de filtro de datos
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.limpiarSelect();
    this.limpiarbtnCrud();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    limpiarSelect(){
      this.selection.clear();
    }

    verSeleccionado(row: any){
           if (this.selection.isSelected(row) == false && this.btnCrud == true){
        this.btnCrud = false; //prop desactivado = falso | ACTIVA BOTONES
      }
      if (this.selection.isSelected(row) == true && this.btnCrud == false){
        this.btnCrud = true; //prop desactivado = true | DESACTIVA BOTONES
       }
    }

    verSeleccionado2(row: any){
      if (this.selection.isSelected(row) == true && this.btnCrud == true){
        this.btnCrud = false; //prop desactivado = falso | ACTIVA BOTONES
      }
      if (this.selection.isSelected(row) == false && this.btnCrud == false){
        this.btnCrud = true; //prop desactivado = true | DESACTIVA BOTONES
       }
    }


  }
  