import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IfScreensizeDirective } from './directives/if-screensize/if-screensize.directive';
import { PositiveNegativeSymbolPipe } from './pipes/positive-negative-symbol/positive-negative-symbol.pipe';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const sharedDirectives = [IfScreensizeDirective];
const sharedPipes = [PositiveNegativeSymbolPipe];
const declarationsToExport = [...sharedDirectives, ...sharedPipes];
@NgModule({
  declarations: [...declarationsToExport],
  imports: [...sharedModules],
  exports: [...sharedModules, ...declarationsToExport],
})
export class SharedModule {}
