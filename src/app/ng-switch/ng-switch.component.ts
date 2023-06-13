import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  fieldname = "";  
  

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    
  }
  openDialog(){}
}
