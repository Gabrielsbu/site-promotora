import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './downloads-routing.module';
import { DownloadsComponent } from './downloads.component';


@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    DownloadRoutingModule
  ]
})
export class DownloadsModule { }
