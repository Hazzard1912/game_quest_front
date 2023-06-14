import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Result } from 'src/app/interfaces/detalle.interface';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-detalle-juego',
  standalone: true,
  imports: [CommonModule, ChipModule, ButtonModule],
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css'],
})
export class DetalleJuegoComponent implements OnInit {
  respuesta: string = '';
  juego!: Result;
  value: string = '';

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.respuesta = params['juego'];
    });
    this.buscarJuego();
  }

  buscarJuego() {
    this.apiService.buscarJuego(this.respuesta).subscribe((juego) => {
      this.juego = juego;
    });
  }
}
