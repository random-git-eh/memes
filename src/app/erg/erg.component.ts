import { Component, OnInit } from '@angular/core';
import { erg_rates } from '../erg_rates';

@Component({
  selector: 'app-erg',
  templateUrl: './erg.component.html',
  styleUrls: ['./erg.component.css']
})
export class ErgComponent implements OnInit {

  constructor() { }

  tapCount = 0;
  totalDmfs = 0;
  rate = 0;
  selected_level = 0;

  is_boosted = false;
  is_checked = false;
  result = '';
  rng = 0;
  disabled = true;

  update_rate(event: Event){
    this.is_boosted = (<HTMLInputElement>event.target).checked;
    if(this.selected_level != 0){
      if (this.is_boosted){
        this.rate = erg_rates[Number(this.selected_level) as keyof typeof erg_rates]['boost'];
      }else{
        this.rate = erg_rates[Number(this.selected_level) as keyof typeof erg_rates]['base'];
      }
    }
  }  




  onSelected(value: string){
    this.selected_level = Number(value);
    if (this.is_boosted){
      this.rate = erg_rates[Number(value) as keyof typeof erg_rates]['boost'];
    }else{
      this.rate = erg_rates[Number(value) as keyof typeof erg_rates]['base'];
    }
    this.tapCount = 0; //reset on change
    this.totalDmfs = 0; //reset on change
    this.result = '';
    this.disabled = false;
  }

  do_erg(roll: HTMLElement){
    this.rng = Math.random();
    console.log(this.rng);
    if (this.rng <= this.rate){
      this.result = 'SUCCESS';
      this.disabled = true;
    }else{
      this.result = 'FAIL!';
    }
    this.tapCount += 1;
    this.totalDmfs += 3;
  }



  ngOnInit(): void {
    
  }

}
