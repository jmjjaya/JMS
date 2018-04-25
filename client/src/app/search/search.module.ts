import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    NgxDatatableModule,
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, SearchBarComponent],
  exports: [SearchComponent, SearchBarComponent]
})
export class SearchModule { }
