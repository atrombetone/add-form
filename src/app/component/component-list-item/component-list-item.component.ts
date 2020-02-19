import { Component, OnInit, Input } from '@angular/core';
import { Conjuge } from 'src/app/pages/fprincipal/fprincipal.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-component-list-item',
  templateUrl: './component-list-item.component.html',
  styleUrls: ['./component-list-item.component.css']
})
export class ComponentListItemComponent implements OnInit {

  itemForm = this.fb.group({
    id: null,
    name: null,
    age: null
  });

  @Input()
  conjugeItem: Conjuge;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }
  
  ngAfterViewInit() { 
    this.itemForm.controls['id'].setValue(this.conjugeItem.id);
    this.itemForm.controls['name'].setValue(this.conjugeItem.name);
    this.itemForm.controls['age'].setValue(this.conjugeItem.age);
    
   }


}
