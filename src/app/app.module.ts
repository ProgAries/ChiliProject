import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChiliDescriptComponent } from './pages/chili-descript/chili-descript.component';
import { ChiliListComponent } from './pages/chili-list/chili-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiliData } from './fakedata/chiliData';
import { ChiliService } from './services/chili.service';
import { HttpClientModule } from '@angular/common/http';
import { AddChiliComponent } from './pages/add-chili/add-chili.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DescriptComponent } from './pages/descript/descript.component';


@NgModule({
  declarations: [
    AppComponent,
    ChiliDescriptComponent,
    ChiliListComponent,
    AddChiliComponent,
    HeaderNavbarComponent,
    FooterComponent,
    DescriptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
