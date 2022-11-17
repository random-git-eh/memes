import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echostone',
  templateUrl: './echostone.component.html',
  styleUrls: ['./echostone.component.css']
})
export class EchostoneComponent implements OnInit {
  selectedType = '';
  onSelected(value: string){
    this.selectedType = value;
  }
  counter = 0;
  onClick(){
    this.counter += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
