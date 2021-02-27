import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParticlesModule } from 'angular-particle';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
