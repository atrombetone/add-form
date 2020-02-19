import { Component, OnInit, Input } from '@angular/core';
import { Conjuge } from 'src/app/pages/fprincipal/fprincipal.component';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  @Input()
  conjugesInput: Array<Conjuge> = [];
  constructor() { }

  ngOnInit() {
  }

}
