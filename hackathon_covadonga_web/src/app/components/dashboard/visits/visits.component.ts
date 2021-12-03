import { ViewChild, Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { Visits } from '../../../models/visits';

import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AllServicesService } from '../../../services/all-services.service';

import { VisitsFormComponent } from './visits-form/visits-form.component';
@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  estado : number = 1;
  filtro: number = 1;
  
  opcionCrud: string = "agregar";
  btnCrud: boolean = true;
  
  visit: Visits ={
    idVisit: " ",
    idPatient: "",
    idVisitStatus: ""
  }

  ELEMENT_DATA!: Visits[];
  
  displayedColumns: string[] = ['select','idVisit', 'idPatient', 'idVisitStatus', 'date'];
  dataSource = new MatTableDataSource<Visits>(this.ELEMENT_DATA);
  selection = new SelectionModel<Visits>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private allServices:AllServicesService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.cargarVisits(this.filtro);
    this.cargarVisits();
  }

  // -----------------------------------------------------
  limpiarObjeto(){
    this.visit ={

    }
  }
 
  aplicarFiltro() {
    this.filtro = this.estado;
    // this.cargarVisits(this.filtro);
    this.cargarVisits();
    this.limpiarbtnCrud();
  }
  
  // public cargarVisits(filtro1:number){
  //   let resp = this.allServices.getVisits(filtro1);
  //   resp.subscribe(resp=> this.dataSource.data=resp as Visits[]);
  // }


   public cargarVisits(){
    let resp = this.allServices.getVisits();
    resp.subscribe(resp=> this.dataSource.data=resp as Visits[]);
  }

  
  agregar(){
    this.opcionCrud = "agregar";
    const dialogRef = this.dialog.open(VisitsFormComponent, {
      data: { visit: this.visit, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.visit.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.postVisit( this.visit)
              .subscribe( 
                          resp => {
                          this.openSnackBar( 'Se agrego ', this.visit.idVisit);
                          // console.log('Respuesta', resp.idvisit)
                          // this.cargarVisits(1); 
                          this.cargarVisits(); 

                          this.aplicarFiltro();
                          this.limpiarObjeto();
                          }
                         , error => {
                          if(error.status == '4001'){

                            console.log(error.status);
                            this.openSnackBar('Ya existe ', this.visit.idVisit);
                          }
                          else{
                            console.log('error inesperado');
                            console.log(this.visit);
                          }
                         }               
              )              
          }
        }
      }
    )
  }

  editar(){
    this.visit = this.selection.selected[0];
    this.opcionCrud = "editar";
    const dialogRef = this.dialog.open(VisitsFormComponent, {
      data: { visit: this.visit, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.visit.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.putVisit(this.visit)
              .subscribe( resp => {
                this.openSnackBar( 'Se edito ', this.visit.idPatient);
                console.log('Respuesta', resp)
                this.aplicarFiltro();
                // this.cargarVisits(1); 
                this.limpiarObjeto();
              })
              
          }
        }
      }
    )
  }

  eliminar(){
    this.visit = this.selection.selected[0];
    //  console.log(this.visit);
     this.opcionCrud = "eliminar";
     const dialogRef = this.dialog.open(VisitsFormComponent, {
      data: { visit: this.visit, opcionCrud: this.opcionCrud }
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if( result ) {
          if( this.visit.idPatient.trim().length === 0 ){
            return;
          }
          else{
             this.allServices.deleteVisit( this.visit.idPatient)
              .subscribe( resp => {
                this.openSnackBar( 'Se elimino ', this.visit.idPatient);
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
    this.visit = this.selection.selected[0];
    //  console.log(this.visit);
     this.opcionCrud = "detalle";
     const dialogRef = this.dialog.open(VisitsFormComponent, {
      data: { visit: this.visit, opcionCrud: this.opcionCrud }
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
  