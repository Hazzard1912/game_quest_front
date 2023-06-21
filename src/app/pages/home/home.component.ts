import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AnimateModule } from "primeng/animate";
import { DeferModule } from "primeng/defer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, AnimateModule, DeferModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
