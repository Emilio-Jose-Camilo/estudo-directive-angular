import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-ng-if',
  templateUrl: './sub-ng-if.component.html',
  styleUrls: ['./sub-ng-if.component.scss']
})
export class SubNgIfComponent implements OnInit{


  constructor() {
    console.log("SubNgIfComponent")
   }

  ngOnInit(): void {
    
  }

}