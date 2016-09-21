import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { RestService } from './rest.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent],
   bootstrap: [AppComponent],
   providers: [RestService, HeroService]
})
export class AppModule { }
