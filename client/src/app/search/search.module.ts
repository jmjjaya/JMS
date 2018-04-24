import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
