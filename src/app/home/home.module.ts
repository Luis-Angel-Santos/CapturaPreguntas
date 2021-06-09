import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
