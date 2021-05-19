import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const importedAndExportedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
@NgModule({
  declarations: [],
  imports: [...importedAndExportedModules],
  exports: [...importedAndExportedModules],
})
export class SharedModule {}
