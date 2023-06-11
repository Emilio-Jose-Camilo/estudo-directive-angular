import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  selectedNames = 0;

  names = [
    "Maria",
    "João",
    "José",
    "Matheus"
  ]

  cities = [
    {name: "Sao Paulo", state: "SP"},
    {name: "Porto Alegre", state: "RS"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"}
  ]

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.selectedNames);
  }
}
