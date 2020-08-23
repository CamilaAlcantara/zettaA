import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CargoComponent } from './components/cargo/cargo.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PessoaComponent } from './components/pessoa/pessoa.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'menu',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'pessoa',
    component: PessoaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'cargo',
    component: CargoComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
