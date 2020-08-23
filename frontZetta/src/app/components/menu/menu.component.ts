import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  visibleSidebar1;
  constructor() { }

  display;
  items: MenuItem[];
  ngOnInit() {

    this.items = [
      {
        label: 'Cadastro',
        items: [
          { label: 'Cargo', routerLink: '/cargo' },
          { label: 'Perfil', routerLink: '/perfil' },
          { label: 'Pessoa', routerLink: '/pessoa' },
          { label: 'Usuário', routerLink: '/usuario' },
        ]
      },
  ];

  }

}
