import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
