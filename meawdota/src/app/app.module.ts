import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { NavComponent } from './pages/adote/nav/nav.component';
import { CardsComponent } from './pages/adote/cards/cards.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ApoieComponent } from './pages/apoie/apoie.component';
import { LoginComponent } from './pages/login/login.component';
import { AdoteComponent } from './pages/adote/adote.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { ConhecerComponent } from './pages/adote/conhecer/conhecer.component';

//Material imports
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule} from '@angular/material/chips';
import { MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroanimalComponent } from './pages/cadastroanimal/cadastroanimal.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ParceriaComponent } from './pages/parceria/parceria.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardsComponent,
    SobrenosComponent,
    HomeComponent,
    ApoieComponent,
    LoginComponent,
    AdoteComponent,
    FooterComponent,
    ConhecerComponent,
    CadastroanimalComponent,
    CadastroComponent,
    ParceriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
