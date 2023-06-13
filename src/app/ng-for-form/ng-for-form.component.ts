import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.scss']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    { name: "Acre", state: "AC" },
    { name: "Alagoas", state: "AL" },
    { name: "Amazonas", state: "AM" },
    { name: "Amapá", state: "AP" },
    { name: "Bahia", state: "BA" },
    { name: "Ceará", state: "CE" },
    { name: "Distrito Federal", state: "DF" },
    { name: "Goias", state: "GO" },
    { name: "Maranhão", state: "MA" },
    { name: "Minas Gerais", state: "MG" },
    { name: "Minas Gerais", state: "MG" },
    { name: "Maato Grosso do Sul", state: "MS" },
    { name: "Mato Grosso", state: "MT" },
    { name: "Pará", state: "PA" },
    { name: "Paraíba", state: "PB" },
    { name: "Pernambuco", state: "PE" },
    { name: "Piauí", state: "PI" },
    { name: "Paraná", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
    { name: "Rio Grande do Norte", state: "RN" },
    { name: "Rondônia", state: "RO" },
    { name: "Roraima", state: "RR" },
    { name: "Rio Grande do Sul", state: "RS" },
    { name: "Santa Catarina", state: "SC" },
    { name: "Santa Catarina", state: "SC" },
    { name: "Sergipe", state: "SE" },
    { name: "São Paulo", state: "SP" },
    { name: "Tocantins", state: "TO" },
  ];

  clients: Array<{ name: string; address: string; city: string; age: number; phone: string }> = [];

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.clients.push({
      name: this.name,
      address: this.address,
      city: this.city,
      age: this.age,
      phone: this.phone
    });
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = "";
    this.address = "";
    this.city = "";
    this.phone = "";
    this.age = 0;
  }
  delete(i: number) {
    this.clients.splice(i, 1)
  }
}
