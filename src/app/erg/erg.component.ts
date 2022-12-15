import { Component, OnInit } from '@angular/core';
import { erg_rates } from '../erg_rates';

@Component({
  selector: 'app-erg',
  templateUrl: './erg.component.html',
  styleUrls: ['./erg.component.css']
})
export class ErgComponent implements OnInit {

  constructor() { }

  total_taps = 0;
  totalDmfs = 0;
  boosted_taps = 0;
  regular_taps = 0;
  rate = 0;
  selected_level = 0;

  is_boosted = false;
  result = '';
  rng = 0;
  disabled = true;
  data: any = []

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
    this.total_taps = 0; //reset on change
    this.totalDmfs = 0; //reset on change
    this.boosted_taps = 0;
    this.regular_taps = 0;
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
    if (this.is_boosted){
      this.boosted_taps += 1
    }else{
      this.regular_taps += 1
    }
    this.total_taps = this.boosted_taps + this.regular_taps;
    this.totalDmfs += 3;
    if(this.result[0] === 'S'){
      this.data.push(
        {'level': this.selected_level, 'regular': this.regular_taps, 'boost taps': this.boosted_taps, 'total': this.total_taps, 'DMFs': this.totalDmfs}
      )
      console.log(this.data);
    }
  }



  ngOnInit(): void {
    
  }

}
