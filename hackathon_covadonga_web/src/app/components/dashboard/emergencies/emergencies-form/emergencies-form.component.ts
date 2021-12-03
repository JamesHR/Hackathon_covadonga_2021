import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-emergencies-form',
  templateUrl: './emergencies-form.component.html',
  styleUrls: ['./emergencies-form.component.scss']
})
export class EmergenciesFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
               public dialogRef: MatDialogRef<EmergenciesFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



}
