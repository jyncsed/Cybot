import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroidComponent } from './droid/droid.component';
import { ItemsComponent } from './items/items.component';



@NgModule({
  declarations: [DroidComponent, ItemsComponent],
  imports: [
    CommonModule
  ],
  exports: [DroidComponent, ItemsComponent]
})
export class CustomIconsModule { }
