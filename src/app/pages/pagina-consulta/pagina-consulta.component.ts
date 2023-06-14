import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Result } from 'src/app/interfaces/detalle.interface';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-pagina-consulta',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.css'],
})
export class PaginaConsultaComponent implements OnInit {
  pagina: string = '';
  resultados: Result[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pagina = params['consulta'];
      this.apiService.buscarPorGenero(this.pagina).subscribe((juegos) => {
        this.resultados = juegos;
        console.log(this.resultados);
      });
    });
  }

  imagenClick(juego: string) {
    this.router.navigate(['detalle-juego', { juego: juego }]);
  }
}
