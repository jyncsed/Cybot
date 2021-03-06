import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { RoleGuard } from './shared/guards/role-guard.service';
import { TestPage2Component } from './test-page2/test-page2.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/http-interceptors/auth-interceptor';
import { NavigationbarComponent } from './shared/components/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './shared/services/auth-service.service';
import { LoginModule } from './modules/login/login.module';
import { ControlsModule } from './shared/modules/controls/controls.module';
import { AlertsModule } from './modules/alerts/alerts.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeammembersComponent } from './components/teammembers/teammembers.component';
import { WelcomeSectionsComponent } from './components/welcome-sections/welcome-sections.component';
import {CustomIconsModule } from './modules/custom-icons/custom-icons.module';
import { DroidsComponent } from './pages/products/droids/droids.component';
import { ItemsComponent } from './pages/products/items/items.component';
import { WeaponsComponent } from './pages/products/weapons/weapons.component';
import { ShipsComponent } from './pages/products/ships/ships.component';
import { VehicleComponent } from './pages/products/vehicle/vehicle.component';
import { AccordianComponent } from './pages/products/accordian/accordian.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component'
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestPageComponent,
    TestPage2Component,
    NavigationbarComponent,
    WelcomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    TeammembersComponent,
    WelcomeSectionsComponent,
    DroidsComponent,
    ItemsComponent,
    WeaponsComponent,
    ShipsComponent,
    VehicleComponent,
    AccordianComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LoginModule,
    ControlsModule,
    AlertsModule,
    CustomIconsModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
