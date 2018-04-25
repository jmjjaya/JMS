import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule,
    HttpClientModule,
    RouterModule

  ],
  declarations: [SearchComponent, SearchBarComponent],
  exports: [SearchComponent, SearchBarComponent]
})
export class SearchModule { }
