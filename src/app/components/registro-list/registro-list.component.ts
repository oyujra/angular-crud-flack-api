import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {
  registros: any[] = [];
  currentPage = 1;
  totalPages = 1;
  perPage = 10;

  constructor(
    private registroService: RegistroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRegistros(this.currentPage);
  }

  loadRegistros(page: number): void {
    this.registroService.getRegistros(page, this.perPage).subscribe(data => {
      this.registros = data.registros;
      this.totalPages = data.total_pages;
    });
  }

  deleteRegistro(id: number): void {
    this.registroService.deleteRegistro(id).subscribe(() => {
      this.loadRegistros(this.currentPage);
    });
  }
  addRegistro(): void {
    this.router.navigate(['/add']);
  }
}
