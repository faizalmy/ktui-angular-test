import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KtTooltipDirective } from './tooltip.directive';
import { KtDropdownDirective } from './dropdown.directive';
import { KtAccordionDirective } from './accordion.directive';
import { KtCollapseDirective } from './collapse.directive';
import { KtDismissDirective } from './dismiss.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KtTooltipDirective,
    KtDropdownDirective,
    KtAccordionDirective,
    KtCollapseDirective,
    KtDismissDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
