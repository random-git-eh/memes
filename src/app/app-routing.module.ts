import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EchostoneComponent } from './echostone/echostone.component';
import { ErgComponent } from './erg/erg.component';
import { ErgKrComponent } from './erg-kr/erg-kr.component';


const routes = [
  {path: '', component: ErgComponent},
  {path: 'erg', component: ErgComponent},
  {path: 'erg-kr', compoonent: ErgKrComponent}
]


@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
