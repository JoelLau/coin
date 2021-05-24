import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IfScreensizeDirective } from './directives/if-screensize/if-screensize.directive';

const sharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const sharedDirectives = [IfScreensizeDirective];
@NgModule({
  declarations: [...sharedDirectives],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedDirectives],
})
export class SharedModule {}
