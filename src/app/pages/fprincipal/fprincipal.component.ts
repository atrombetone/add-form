import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class Conjuge {
  id: number;
  name: string;
  age: number;
  constructor(private _id: number) {
    this.id = _id;
  }
}

export class Banco {
  bancoCorretora : Array<BancoItem>;
}

export class BancoItem {
  group: string;
  value: string;
  keyValue: string;
}
@Component({
  selector: 'app-fprincipal',
  templateUrl: './fprincipal.component.html',
  styleUrls: ['./fprincipal.component.css']
})
export class FprincipalComponent implements OnInit {

  conjuges: Array<Conjuge> = [];
  idCont: number = 1;

  constructor() { }

  ngOnInit() {
    
  }

  addConjuge() {
    let obj = new Conjuge(this.idCont);
    obj.name = 'objeto nome ' + this.idCont;
    obj.age = 20 + this.idCont++;
    this.conjuges.push(obj);
  }

}
