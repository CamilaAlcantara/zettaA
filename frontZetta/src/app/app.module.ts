
import { AppComponent } from './app.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import {BlockUIModule} from 'primeng/blockui';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CargoComponent,
    PerfilComponent,
    PessoaComponent,
    UsuarioComponent,
    MenuComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    TieredMenuModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    BlockUIModule,
    SelectButtonModule,
    CalendarModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule,
    DialogModule,
    KeyFilterModule,
    ToastModule,
    ProgressSpinnerModule,
    SidebarModule,
    PanelMenuModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFontAwesomeModule

  ],
  providers: [
    MessageService,
    MensagemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
