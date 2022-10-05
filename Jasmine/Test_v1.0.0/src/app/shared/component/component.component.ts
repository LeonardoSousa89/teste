import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

    constructor() { }

    private value :number=0

    ngOnInit(): void {}

    get getValue(): number | any{
      return this.value
    }

    public  incrementsEmpty(): number {
      this.value=this.value+=1
      return this.value 
    }

    public decrementsEmpty(): number {
      this.value=this.value-=1
      if(this.value < 0){ this.value=0 }
      return this.value 
    }

}
