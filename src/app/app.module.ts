import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavDesktopComponent } from './layout/components/nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './layout/components/nav-mobile/nav-mobile.component';
import { NavComponent } from './layout/components/nav/nav.component';
import { StackedLayoutComponent } from './layout/components/stacked-layout/stacked-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    StackedLayoutComponent,
    NavComponent,
    NavDesktopComponent,
    NavMobileComponent,
  ],
  imports: [
    // angular
    BrowserModule,

    // third party

    // core, shared
    CoreModule.forRoot(),
    SharedModule,

    // app
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
