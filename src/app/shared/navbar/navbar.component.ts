import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Mejores Valorados',
            icon: 'pi pi-fw pi-star',
        },
        {
            label: 'Generos',
            icon: 'pi pi-fw pi-hashtag',
            items: [
                {
                    label: 'Accion',
                },
                {
                    label: 'Indie',
                },
                {
                    label: 'Aventura',
                },
                {
                    label: 'Rol',
                },
                {
                    label: 'Shooter',
                },
                {
                    label: 'Casual',
                },
                {
                    label: 'Simulacion',
                },
                {
                    label: 'Puzzle',
                },
                {
                    label: 'Arcade',
                },
                {
                    label: 'Plataformas',
                },
                {
                    label: 'MMO',
                },
                {
                    label: 'Carreras',
                },
                {
                    label: 'Deportes',
                },
                {
                    label: 'Peleas',
                },
                {
                    label: 'De Cartas',
                },
                {
                    label: 'Estrategia',
                }
            ]
        },
        {
            label: 'Registrarse',
            icon: 'pi pi-fw pi-user-plus',
        },
        {
            label: 'Loguearse',
            icon: 'pi pi-fw pi-sign-in',
        },
        {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}

// TODO: Implementar el servicio para hacer la busqueda en la api
// y asi poder realizar las busquedas desde el navbar...

// Todos los botones ejecutaran el mismo metodo, metodo que pedira
// por un string que asociaremos al boton, y podremos entonces usar
// un switch case para decidir que peticion hacer. 

}
