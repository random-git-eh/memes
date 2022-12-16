import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { erg_rates, erg_rates_future_A, erg_rates_future_B } from '../erg_rates';

@Component({
  selector: 'app-erg-kr',
  templateUrl: './erg-kr.component.html',
  styleUrls: ['./erg-kr.component.css']
})
export class ErgKrComponent implements OnInit {

  constructor() { }

  //defaults
  precision = 5;

  //stats
  total_taps = 0;
  totalDmfs = 0;
  boosted_taps = 0;
  regular_taps = 0;
  rate = 0;
  failstack_rate = 0;

  //levels and grades, user inputs
  selected_grade = ''
  selected_level = 0;
  is_boosted = false;
  

  // generated
  rng = 0;
  disabled_level = true;
  disabled_button = true;
  data: any = []

  // finalize
  result = '';


  //getter
  get success_rate(){
    return this.rate;
  }

  //setter
  set success_rate(rate: number){
    this.rate = rate;
  }

  reset_current_erg(){
    this.totalDmfs = 0;
    this.total_taps = 0;
    this.boosted_taps = 0;
    this.regular_taps = 0;
    this.rate = 0
    this.failstack_rate = 0;
    this.selected_level = 0;
    this.disabled_level = false;
    this.disabled_button = true;
    //this.selected_grade = '';
  }

  reset_counter(){
    this.totalDmfs = 0;
    this.total_taps = 0;
    this.boosted_taps = 0;
    this.failstack_rate = 0;
  }


  set_rate(grade: string, level: Number, is_boosted: boolean){
    let base_rate = 0;
    let boosted = 0;
    switch(grade){
      case 'S':
        base_rate = erg_rates[level as keyof typeof erg_rates]['base'];
        boosted = erg_rates[level as keyof typeof erg_rates]['boost'];
        break;
      case 'A':
        base_rate = erg_rates_future_A[level as keyof typeof erg_rates_future_A]['base'];
        boosted = erg_rates_future_A[level as keyof typeof erg_rates_future_A]['boost'];
        break;
      case 'B':
        base_rate = erg_rates_future_B[level as keyof typeof erg_rates_future_B]['base'];
        boosted = erg_rates_future_B[level as keyof typeof erg_rates_future_B]['boost'];
        break;
    }
    if(is_boosted){
      return (base_rate + boosted) > 1 ? 1 : Number((base_rate + boosted).toFixed(this.precision));
    }
    return base_rate;

    
  }

  on_select_boost(){
    this.rate = this.set_rate(this.selected_grade, this.selected_level, this.is_boosted);
    this.rate = Number((this.rate + this.failstack_rate).toFixed(this.precision));
  }

  on_select_grade(){
    console.log(this.selected_grade);
    this.reset_current_erg();
  }

  on_select_level(){
    this.reset_counter();
    this.disabled_button = false;
    this.rate = this.set_rate(this.selected_grade, this.selected_level, this.is_boosted);
  }

  on_change_failstack(){
    if(this.total_taps > 0 && this.total_taps % 10 == 0){
      this.failstack_rate = Number((this.failstack_rate + 0.0001).toFixed(this.precision));
      this.rate = Number((this.rate + 0.0001).toFixed(this.precision));
    }
  }

  do_erg(){
    this.rng = Number(Math.random().toFixed(this.precision));
    console.log(this.rng);
    console.log("DMFs: ", this.totalDmfs);
    
    if(this.is_boosted){
      this.boosted_taps += 1;
    }else{
      this.regular_taps += 1;
    }
    this.total_taps = this.boosted_taps + this.regular_taps;
    this.totalDmfs = this.total_taps * 3;
    if(this.rng <= this.rate){
      this.result = 'Congratulation on breaking erg! You see, erg is easy! Now, go do it in-game!'
      // add to table
      this.data.push(
        {'level': this.selected_level, 
         'grade': this.selected_grade,
         'regular': this.regular_taps,
         'failstack': this.failstack_rate, 
         'boost taps': this.boosted_taps, 
         'total': this.total_taps, 
         'DMFs': this.totalDmfs}
      )

      this.reset_current_erg();
    }else{
      this.result = 'FAILED! ';
      let meme = ''
      switch(true){
        case (this.total_taps >= 0 && this.total_taps < 50):
          meme = 'Welcome to Erg! I hope you enjoy your stay!';
          break;
        case (this.total_taps >= 50 && this.total_taps < 100):
          meme = 'Do you feel the pain yet?';
          break;
        case (this.total_taps >= 100 && this.total_taps < 150):
          meme = 'Do you enjoy suffering?';
          break;
        case (this.total_taps >= 150 && this.total_taps < 200):
          meme = 'Why are you doing this?';
          break;
        case (this.total_taps >= 200 && this.total_taps < 250):
          meme = 'You must like pain.';
          break;
        case (this.total_taps >= 250 && this.total_taps < 300):
          meme = 'Maybe you shouldn’t go gamble';
          break;
        case (this.total_taps >= 300):
          meme = 'Surely next tap? Surely!';
          break; 
      }
      this.result += meme;


    }
    this.on_change_failstack();
  }

  

  


  ngOnInit(): void {
  }

}
