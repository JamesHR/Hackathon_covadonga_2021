import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { AllServicesService } from '../../services/all-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   // varibales para guardar el estado del menu
   events: string[] = [];
   opened: boolean = false;
 
 
   menuLateral: Menu[] =[];
  
 
   constructor(private allServices: AllServicesService) { }
 
   ngOnInit(): void {
     this.cargarMenu();
   }
 
   cargarMenu(){
     this.allServices.getMenu().subscribe( data => {
       this.menuLateral = data;
     })
   }
 
}
