import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProgrammeDetailComponent } from './programme-detail.component';
import { ProgrammesComponent } from './programmes.component';
import { ProgrammeService } from './programme.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeDetailComponent,
    ProgrammesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ProgrammeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
