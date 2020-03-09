import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';


@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    LinkRoutingModule
  ]
})
export class LinkModule { }
