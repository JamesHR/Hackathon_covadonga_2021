import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AllServicesService } from '../../../services/all-services.service';
import { SelectionModel } from '@angular/cdk/collections';

import { Emergencies } from '../../../models/emergencies';
import { EmergenciesFormComponent } from './emergencies-form/emergencies-form.component';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss']
})
export class EmergenciesComponent implements OnInit {

  estado : number = 1;
  filtro: number = 1;
  
  opcionCrud: string = "agregar";
  btnCrud: boolean = true;
  
  emergencie: Emergencies ={

   
  }

  ELEMENT_DATA!: Emergencies[];
  
  displayedColumns: string[] = ['select', 'triage', 'unidad', 'causa', 'time', 'km'];
  dataSource = new MatTableDataSource<Emergencies>(this.ELEMENT_DATA);
  selection = new SelectionModel<Emergencies>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!: MatSort;

  constructor(private allServices:AllServicesService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.cargaremergencies(this.filtro);
    this.cargarEmergencies();
  }

  // ---------
  

  // -----------------------------------------------------
  limpiarObjeto(){
    this.emergencie ={

    }
  }
 
  aplicarFiltro() {
    this.filtro = this.estado;
    // this.cargaremergencies(this.filtro);
    this.cargarEmergencies();
    this.limpiarbtnCrud();
  }
  

   public cargarEmergencies(){
    let resp = this.allServices.getEmergencies();
    resp.subscribe(resp=> this.dataSource.data=resp as Emergencies[]);
  }

  
  agregar(){
    
  }

  editar(){
   
  }

  eliminar(){
    
  } 

  verDetalle(){
    this.emergencie = this.selection.selected[0];
     this.opcionCrud = "detalle";
     const dialogRef = this.dialog.open(EmergenciesFormComponent, {
      data: { emergencie: this.emergencie, opcionCrud: this.opcionCrud }
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
  