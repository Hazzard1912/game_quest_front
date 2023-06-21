import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Mejores Valorados',
        icon: 'pi pi-fw pi-star',
        routerLink: ['mejores-valorados'],
      },
      {
        label: 'Generos',
        icon: 'pi pi-fw pi-hashtag',
        items: [
          {
            label: 'Accion',
            command: () => this.consulta('action'),
          },
          {
            label: 'Indie',
            command: () => this.consulta('indie'),
          },
          {
            label: 'Aventura',
            command: () => this.consulta('adventure'),
          },
          {
            label: 'Rol',
            command: () => this.consulta('role-playing-games-rpg'),
          },
          {
            label: 'Shooter',
            command: () => this.consulta('shooter'),
          },
          {
            label: 'Casual',
            command: () => this.consulta('casual'),
          },
          {
            label: 'Simulacion',
            command: () => this.consulta('simulation'),
          },
          {
            label: 'Puzzle',
            command: () => this.consulta('puzzle'),
          },
          {
            label: 'Arcade',
            command: () => this.consulta('arcade'),
          },
          {
            label: 'Plataformas',
            command: () => this.consulta('platformer'),
          },
          {
            label: 'MMO',
            command: () => this.consulta('massively-multiplayer'),
          },
          {
            label: 'Carreras',
            command: () => this.consulta('racing'),
          },
          {
            label: 'Deportes',
            command: () => this.consulta('sports'),
          },
          {
            label: 'Peleas',
            command: () => this.consulta('fighting'),
          },
          {
            label: 'De Cartas',
            command: () => this.consulta('card'),
          },
          {
            label: 'Estrategia',
            command: () => this.consulta('strategy'),
          },
        ],
      },
    ];
  }
  consulta(consulta: string) {
    this.router.navigate(['pagina-consulta', { consulta: consulta }]);
  }

  busquedaPrecisa(busqueda: string) {
    if (busqueda === '') return;
    this.router.navigate(['detalle-juego', { juego: busqueda.toLowerCase() }]);
    timer(1000).subscribe(() => {
      location.reload();
    });
  }

  // TODO: Implementar el servicio para hacer la busqueda en la api
  // y asi poder realizar las busquedas desde el navbar...

  // Todos los botones ejecutaran el mismo metodo, metodo que pedira
  // por un string que asociaremos al boton, y podremos entonces usar
  // un switch case para decidir que peticion hacer.
}
