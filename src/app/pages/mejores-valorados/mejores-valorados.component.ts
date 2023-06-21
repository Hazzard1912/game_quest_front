import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';
import { Result } from 'src/app/interfaces/interface';
import { Router } from '@angular/router';
import { DeferModule } from "primeng/defer";
import { AnimateModule } from "primeng/animate";


@Component({
  selector: 'app-mejores-valorados',
  standalone: true,
  imports: [CommonModule, CardModule, DeferModule, AnimateModule],
  templateUrl: './mejores-valorados.component.html',
  styleUrls: ['./mejores-valorados.component.css'],
})
export class MejoresValoradosComponent implements OnInit {
  resultados: Result[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService
      .mejoresValorados()
      .pipe(map((respuesta) => respuesta.results))
      .subscribe((resultados) => {
        this.resultados = resultados;
      });
  }

  imagenClick(juego: string) {
    this.router.navigate(['detalle-juego', { juego: juego }]);
  }
}
